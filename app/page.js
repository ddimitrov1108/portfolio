import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import WelcomeSection from "@/components/sections/WelcomeSection";

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
