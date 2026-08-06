"use server";

import { getMailer, getMailerCredentials } from "@/lib/nodemailer";
import { ContactFormValues, contactFormSchema } from "@/lib/schema";

export type SendEmailResult = { success: boolean; error?: string };

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

export const sendEmail = async (
  values: ContactFormValues
): Promise<SendEmailResult> => {
  const validateForm = contactFormSchema.safeParse(values);

  if (!validateForm.success) {
    return { success: false, error: "Form failed to validate" };
  }

  const { data } = validateForm;
  const credentials = getMailerCredentials();

  if (credentials.mode === "unconfigured") {
    console.error(
      `[send-email] Missing SMTP credentials: ${credentials.missing.join(", ")}`
    );
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }

  const { user } = credentials;

  const subject = sanitizeHeader(
    `Message from ${data.fullName} - ${data.subject}`
  );
  const safeName = sanitizeHeader(data.fullName);
  const safeDescription = data.description.replace(/[\r\n]{3,}/g, "\n\n");

  try {
    await getMailer(credentials).sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: user,
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
    console.error(`[send-email] SMTP send failed (${credentials.mode}):`, error);
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }

  return { success: true };
};
