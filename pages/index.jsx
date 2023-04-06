import Head from "next/head";
import { Poppins } from "next/font/google";
import Header from "@/components/navigation/Header";
import WelcomeSection from "@/components/sections/WelcomeSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import { register } from 'swiper/element/bundle';
register();

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="root" className={poppins.className}>
        <Header />

        <main>
          <WelcomeSection />
          <AboutSection />
          <PortfolioSection />
        </main>
      </div>
    </>
  );
}