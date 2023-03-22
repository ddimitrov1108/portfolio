import { useLocation } from "react-router-dom";
import HeaderNavigation from "./components/navigation/HeaderNavigation";
import AboutSection from "./components/sections/AboutSection";
import WelcomeSection from "./components/sections/WelcomeSection";
import { useEffect } from "react";

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
      </main>
    </>
  );
}

export default App;
