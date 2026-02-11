"use server";

import mailer from "@/lib/nodemailer";
import { ContactFormValues, contactFormSchema } from "@/lib/schema";

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n\t]/g, " ").trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const sendEmail = async (values: ContactFormValues) => {
  const validateForm = contactFormSchema.safeParse(values);

  if (!validateForm.success) {
    throw new Error("Form failed to validate");
  }

  const { data } = validateForm;

  const email = process.env.NODEMAILER_EMAIL;
  if (!email) {
    if (process.env.NODE_ENV === "development") {
      console.error("NODEMAILER_EMAIL is not set");
    }
    throw new Error("Failed to send message. Please try again later.");
  }

  if (!process.env.NODEMAILER_PASSWORD) {
    if (process.env.NODE_ENV === "development") {
      console.error("NODEMAILER_PASSWORD is not set");
    }
    throw new Error("Failed to send message. Please try again later.");
  }

  const subject = sanitizeHeader(
    `Message from ${data.fullName} - ${data.subject}`
  );
  const safeName = sanitizeHeader(data.fullName);
  const safeDescription = data.description.replace(/[\r\n]{3,}/g, "\n\n");

  try {
    await mailer.sendMail({
      from: `"Portfolio Contact" <${email}>`,
      to: email,
      replyTo: data.email,
      subject,
      text: `From: ${safeName} <${data.email}>\n\n${safeDescription}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(safeName)} &lt;${escapeHtml(data.email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
        <hr />
        <p>${escapeHtml(safeDescription).replace(/\n/g, "<br>")}</p>
      `,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Send email error:", error);
    }
    throw new Error("Failed to send message. Please try again later.");
  }
};
