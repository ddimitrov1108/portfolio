import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import RootProviders from "./providers";
import Toaster from "@/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dimitrov.DEV",
  description: "Web portfolio of a geek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.svg" type="image/svg" sizes="64" />
      </head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <RootProviders>
          <Header />
          <Toaster position="bottom-left" />

          {children}
          
          <Footer />
        </RootProviders>
      </body>
    </html>
  );
}
