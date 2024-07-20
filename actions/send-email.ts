"use server";

import mailer from "@/lib/nodemailer";
import { ContactFormValues, contactFormSchema } from "@/lib/schema";

export const sendEmail = async (values: ContactFormValues) => {
  const validateForm = contactFormSchema.safeParse(values);

  if (!validateForm.success) throw new Error("Form failed to validate");

  const { data } = validateForm;

  try {
    await mailer.sendMail({
      from: data.email,
      to: process.env.NODEMAILER_EMAIL,
      subject: `Message from ${data.fullName} - ${data.subject}`,
      text: `from: ${data.email}\n\n${data.description}`,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send message. Please try again later.");
  }
};
