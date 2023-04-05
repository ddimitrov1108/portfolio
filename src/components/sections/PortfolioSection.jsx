import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

export default function PortfolioSection() {
  return (
    <Section id="portfolio" className="py-32">
      <SectionHeader>
        Featured Projects
        <h4 className="normal-case mt-3 font-bold text-black text-2xl">
          Each project is a unique piece of development 🧩
        </h4>
      </SectionHeader>
    </Section>
  );
}
