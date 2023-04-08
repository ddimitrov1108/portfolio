import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import PortfolioProject from "../PortfolioProject";
import { portfolioProjects } from "../staticData";

export default function PortfolioSection() {
  return (
    <Section id="portfolio" className="py-24">
      <SectionHeader className="pb-12">
        Portfolio
        <h4 className="normal-case mt-3 font-bold text-black text-3xl">
          Each project is a unique piece of development 🧩
        </h4>
      </SectionHeader>

      <div className="grid w-full gap-10 lg:gap-36">
        {portfolioProjects?.map((project) => (
          <PortfolioProject key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
