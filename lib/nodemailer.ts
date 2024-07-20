import nodemailer from "nodemailer";

const mailer = nodemailer.createTransport({
  service: "gmail",

  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export default mailer;
