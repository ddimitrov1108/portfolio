import { Inter } from "next/font/google";
import { HeaderNavigation, SocialLinks } from "@/components/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dimitrov.DEV",
  description: "My web portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNavigation />
        <SocialLinks />

        <main className="min-h-[3000px]">{children}</main>
      </body>
    </html>
  );
}
