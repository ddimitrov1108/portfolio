import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import "@/styles/index.scss";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div id="root" className={poppins.className}>
      <Header />
      
      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
