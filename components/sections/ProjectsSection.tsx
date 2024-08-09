import ProjectsTabs from "../ProjectsTabs";
import Section from "../utils/Section";
import Title from "../utils/Title";

const ProjectsSection = () => {
  return (
    <Section id="projects" className="space-y-12">
      <Title title="My Projects" />

      <ProjectsTabs />
    </Section>
  );
};
export default ProjectsSection;
