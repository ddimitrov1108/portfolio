import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderNav from "@/components/navigation/HeaderNav";
import SocialLinks from "@/components/navigation/SocialLinks";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dimitrov.DEV",
  description: "Web portfolio of a geek.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.svg" type="image/svg" sizes="64" />
      </head>

      <body className={inter.className}>
        <HeaderNav />
        <SocialLinks />

        <main>{children}</main>
      </body>
    </html>
  );
}
