import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import "./styles.scss";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dimitrov.DEV",
  description: "Web Portfolio of a wannable Front-End developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
