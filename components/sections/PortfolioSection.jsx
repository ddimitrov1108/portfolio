import Image from "next/image";
import Link from "next/link";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { v4 as uuidv4 } from "uuid";
import { FiExternalLink } from "react-icons/fi";
import clsx from "clsx";

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
    type: "Case Study",
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
        Featured Projects
        <h4 className="normal-case mt-3 font-bold text-black text-3xl">
          Each project is a unique piece of development 🧩
        </h4>
      </SectionHeader>

      <div className="grid w-full gap-10 lg:gap-36">
        {portfolioProjects.map((project, index) => (
          <div
            key={project.id}
            className="w-full relative flex flex-col lg:flex-row even:lg:justify-end even:lg:text-left odd:lg:text-right"
          >
            <div className="z-30 lg:shadow-xl overflow-hidden w-full h-full lg:max-w-[600px] max-h-[165px] sm:max-h-[240px] md:max-h-[306px] rounded-2xl">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`/${project.img}`}
                  alt={project.img}
                  priority
                  width={1920}
                  height={360}
                  className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-[7000ms] ease-in-out"
                />
              </Link>
            </div>

            <div
              className={clsx(
                "lg:absolute flex flex-col gap-4 top-0 bottom-0 py-4 lg:p-0 lg:top-4 lg:w-[50%]",
                index % 2 ? "lg:left-0" : "lg:right-0"
              )}
            >
              <SectionHeader style={{ paddingBottom: '0px !important'}} className="pb-0 w-full relative z-30 lg:-z-10">
                {project.type}
                <h4 className="capitalize font-bold text-black text-xl z-30">
                  {project.name}
                </h4>
              </SectionHeader>

              <p className="relative z-30 rounded-2xl lg:bg-white text-secondary lg:shadow-md lg:p-4 h-fit">
                {project.description}
              </p>

              <div
                className={clsx(
                  "relative z-30 w-full lg:w-fit flex flex-wrap gap-4",
                  index % 2 ? "lg:mr-auto" : "lg:ml-auto"
                )}
              >
                {project.technologies.map(({ id, src }) => (
                  <div
                    key={id}
                    className="grid items-center p-2 bg-white shadow-md rounded-full cursor-pointer"
                  >
                    <Image
                      src={`/${src}`}
                      alt={src}
                      width="32"
                      height="32"
                      className="w-[32px] h-[32px]"
                    />
                  </div>
                ))}
              </div>

              <div
                className={clsx(
                  "w-fit mt-2",
                  index % 2 ? "lg:mr-auto" : "lg:ml-auto"
                )}
              >
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-fit text-2xl text-primary"
                >
                  <FiExternalLink />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
