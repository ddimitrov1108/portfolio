import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import PortfolioProject from "../PortfolioProject";
import { v4 as uuidv4 } from "uuid";

const techStack = [
  { id: uuidv4(), src: "react.svg" },
  {
    id: uuidv4(),
    src: "tailwindcss.svg",
  },
  {
    id: uuidv4(),
    src: "headlessui.svg",
  },
  {
    id: uuidv4(),
    src: "sass.svg",
  },
  {
    id: uuidv4(),
    src: "swiperjs.svg",
  },
];

const portfolioProjects = [
  {
    id: uuidv4(),
    img: "sellstone-screen.webp",
    url: "https://sellstone.eu/",
    type: "featured project",
    name: "Marketing Landing Page",
    description: `Freelance project to help a small company with their growth in the industry of Digital Marketing.`,
    technologies: [
      { id: uuidv4(), src: "react.svg" },
      {
        id: uuidv4(),
        src: "tailwindcss.svg",
      },
      {
        id: uuidv4(),
        src: "headlessui.svg",
      },
    ],
  },
  {
    id: uuidv4(),
    img: "tickets-burgas-screen.webp",
    url: "https://github.com/ddimitrov1108/tickets-burgas",
    type: "Course Work",
    name: "Bus Tickets App",
    description: `Application that helps the city bus transport by integrating online system for buying and verifying tickets using QR code.`,
    technologies: [
      { id: uuidv4(), src: "react.svg" },
      {
        id: uuidv4(),
        src: "tailwindcss.svg",
      },
      {
        id: uuidv4(),
        src: "headlessui.svg",
      },
      {
        id: uuidv4(),
        src: "sass.svg",
      },
    ],
  },
];

export default function PortfolioSection() {
  return (
    <Section id="portfolio" className="py-8 md:py-24">
      <SectionHeader className="pb-16">
        Portfolio
        <h4 className="normal-case mt-3 font-bold text-black text-3xl">
          Each project is a unique piece of development 🧩
        </h4>
      </SectionHeader>

      <div className="grid w-full gap-10 lg:gap-36">
        {portfolioProjects.map((project, index) => (
          <PortfolioProject
            key={project.id}
            project={project}
            domIndex={index}
          />
        ))}
      </div>
    </Section>
  );
}
