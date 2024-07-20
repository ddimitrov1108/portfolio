import { z } from "zod";

const nameRegex = /^(?:[a-zA-ZÀ-ÿ\u0400-\u04FF\u0500-\u052F'`-]+(?: [a-zA-ZÀ-ÿ\u0400-\u04FF\u0500-\u052F'`-]+)*\.?){1,5}(?: [IVX]+)?$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Required to be at least 3 characters long")
    .max(30, "Required to be no more than 30 characters long")
    .regex(nameRegex, "Invalid field"),
  email: z
    .string()
    .min(3, "Required to enter an email")
    .max(80, "Required to be no more than 80 characters long")
    .regex(emailRegex, "Invalid field"),
  subject: z.string().min(1, "Required to select a subject"),
  description: z
    .string()
    .max(500, "Required to be no more than 500 characters long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
