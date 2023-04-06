import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import Section from "../ui/Section";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    id: uuidv4(),
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com",
  },
  {
    id: uuidv4(),
    icon: <FiGithub />,
    href: "https://github.com",
  },
  {
    id: uuidv4(),
    icon: <FiInstagram />,
    href: "https://www.instagram.com",
  },
];

const techStack = [
  { id: uuidv4(), title: "React", src: "react.svg" },
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
    src: "html.svg",
  },
  {
    id: uuidv4(),
    src: "css.svg",
  },
  {
    id: uuidv4(),
    src: "js.svg",
  },
];

export default function WelcomeSection() {
  return (
    <Section id="home" className="mx-auto min-h-screen grid items-center py-24">
      <div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0">
          <div className="grid space-y-6">
            <div className="text-center lg:text-left text-3xl xs:text-5xl md:text-6xl md:leading-tight font-bold">
              Front-End React Developer 👋🏼
            </div>
            <div className="leading-relaxed text-center lg:text-left text-secondary md:w-3/4 mx-auto lg:mx-0">
              {`Hello! I'm Daniel Dimitrov. A passionate Front-end React Developer
              based in Burgas, Bulgaria. 📍`}
            </div>

            <div className="flex justify-center lg:justify-start gap-3 text-3xl pt-4">
              {socials.map(({ id, icon, href }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-primary transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="avatar-wobble overflow-hidden shadow-lg bg-white">
            <Image
              src="/avatar.webp"
              alt="avatar.webp"
              width="440"
              height="440"
              className="w-[260px] xs:w-[320px] sm:w-[360px] lg:w-[440px]"
            />
          </div>
        </div>
        <div className="mt-16 md:mt-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="max-h-fit border-b-2 text-center px-6 py-2 lg:py-0 lg:pl-0 lg:pr-6 lg:border-b-0 lg:border-r-2 border-black/60 font-semibold">
            Tech Stack
          </div>
          <div className="flex justify-center flex-wrap gap-6">
            {techStack.map(({ id, title, src }) => (
              <div
                key={id}
                className="grid items-center p-4 bg-white shadow-md rounded-full cursor-pointer"
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
        </div>
      </div>
    </Section>
  );
}
