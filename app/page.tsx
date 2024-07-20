import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";

export default function Home() {
  return (
    <main className="space-y-32">
      <HomeSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
