import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderNavigation from "./components/navigation/HeaderNavigation";
import WelcomeSection from "./components/sections/WelcomeSection";
import AboutSection from "./components/sections/AboutSection";
import PortfolioSection from "./components/sections/PortfolioSection";

function App() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const domElement = document.getElementById(
        location.pathname === "/" ? "home" : location.pathname.substring(1)
      );

      if (domElement) domElement.scrollIntoView();
    }, 100);
  }, [location]);

  return (
    <>
      <HeaderNavigation />

      <main>
        <WelcomeSection />
        <AboutSection />
        <PortfolioSection/>
      </main>
    </>
  );
}

export default App;
