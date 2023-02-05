import { useEffect } from "react";
import WelcomeSection from "./components/sections/WelcomeSection";
import AboutSection from "./components/sections/AboutSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import HeaderBar from "./components/app/HeaderBar";
import FooterBar from "./components/app/FooterBar";
import ContactSection from "./components/sections/ContactSection";
import SocialLinks from "./components/SocialLinks";
import ExperienceSection from "./components/sections/ExperienceSection";

export default function App() {
  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show-section", entry.isIntersecting);
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-section");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer = null;
    };
  }, []);

  return (
    <>
      <HeaderBar />
      <SocialLinks />

      <main className="max-w-4xl xl:max-w-6xl mx-auto px-4 lg:px-6 xl:px-10 ">
        <div className="grid space-y-6">
          <WelcomeSection />
          <AboutSection />
          <ExperienceSection />
          <PortfolioSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
