import { useEffect } from "react";
import WelcomeSection from "./components/sections/WelcomeSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import HeaderBar from "./components/HeaderBar";
import ContactSection from "./components/sections/ContactSection";
import SocialLinks from "./components/SocialLinks";

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

      <main className="max-w-4xl xl:max-w-5xl mx-auto px-4 lg:px-6 ">
        <div className="grid space-y-10">
          <WelcomeSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
