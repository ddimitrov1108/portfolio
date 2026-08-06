import nodemailer, { type Transporter } from "nodemailer";

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";

export type MailerCredentials =
  | {
      mode: "oauth2";
      user: string;
      clientId: string;
      clientSecret: string;
      refreshToken: string;
    }
  | { mode: "app-password"; user: string; pass: string }
  | { mode: "unconfigured"; missing: string[] };

const read = (name: string) => {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
};

export const getMailerCredentials = (): MailerCredentials => {
  const user = read("NODEMAILER_EMAIL");
  const clientId = read("GOOGLE_CLIENT_ID");
  const clientSecret = read("GOOGLE_CLIENT_SECRET");
  const refreshToken = read("GOOGLE_REFRESH_TOKEN");
  // Google shows app passwords in groups of four; the spaces are not part of it.
  const pass = read("NODEMAILER_PASSWORD")?.replace(/\s/g, "");

  if (user && clientId && clientSecret && refreshToken) {
    return { mode: "oauth2", user, clientId, clientSecret, refreshToken };
  }

  if (user && pass) {
    return { mode: "app-password", user, pass };
  }

  const missing: string[] = [];
  if (!user) missing.push("NODEMAILER_EMAIL");
  if (!clientId) missing.push("GOOGLE_CLIENT_ID");
  if (!clientSecret) missing.push("GOOGLE_CLIENT_SECRET");
  if (!refreshToken) missing.push("GOOGLE_REFRESH_TOKEN");
  if (!pass) missing.push("NODEMAILER_PASSWORD");

  return { mode: "unconfigured", missing };
};

let transporter: Transporter | null = null;

export const getMailer = (credentials: MailerCredentials): Transporter => {
  if (transporter) return transporter;

  if (credentials.mode === "unconfigured") {
    throw new Error("SMTP credentials are not configured");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth:
      credentials.mode === "oauth2"
        ? {
            type: "OAuth2",
            user: credentials.user,
            clientId: credentials.clientId,
            clientSecret: credentials.clientSecret,
            refreshToken: credentials.refreshToken,
            // Nodemailer still defaults to the legacy accounts.google.com endpoint.
            accessUrl: GOOGLE_TOKEN_URL,
          }
        : {
            user: credentials.user,
            pass: credentials.pass,
          },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  return transporter;
};
