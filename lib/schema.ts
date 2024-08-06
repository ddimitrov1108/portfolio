import { z } from "zod";

const nameRegex =
  /^(?:[a-zA-ZÀ-ÿ\u0400-\u04FF\u0500-\u052F'`-]+(?: [a-zA-ZÀ-ÿ\u0400-\u04FF\u0500-\u052F'`-]+)*\.?){1,5}(?: [IVX]+)?$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const descriptionRegex = /^$|[\s\S]*/;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Required at least 3 characters")
    .max(30, "Required no more than 30 characters")
    .regex(nameRegex, "Invalid field"),
  email: z
    .string()
    .min(3, "Required to enter an email")
    .max(80, "Required no more than 80 characters")
    .regex(emailRegex, "Invalid field"),
  subject: z.string().min(1, "Required to select a subject"),
  description: z
    .string()
    .max(500, "Required no more than 500 characters")
    .regex(descriptionRegex, "Invalid field"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
