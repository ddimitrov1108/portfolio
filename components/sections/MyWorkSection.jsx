import Project from "../Project";
import { projects } from "../constants";
import { Section, SectionHeader } from "../ui";

const MyWorkSection = () => {
  return (
    <Section id="my-work">
      <SectionHeader subtext="my work" containerClassName="mb-20 lg:mb-28 lg:text-center">
        Each project is a unique piece of development 🧩
      </SectionHeader>

      <div className="w-full grid gap-16 lg:gap-32">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};
export default MyWorkSection;
