import Project from "../Project";
import { projects } from "../constants";
import HeaderText from "../ui/HeaderText";
import Section from "../ui/Section";

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <HeaderText subText="Projects" containerClassName="mb-20 lg:mb-28 lg:text-center">
        Each project is a unique piece of development 🧩
      </HeaderText>

      <div className="w-full grid gap-16 lg:gap-32">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};
export default ProjectsSection;
