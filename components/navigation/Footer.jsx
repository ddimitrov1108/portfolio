import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import Section from "../ui/Section";
import { v4 as uuidv4 } from "uuid";

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

export default function Footer() {
  return (
    <footer className="bg-black w-full py-8 md:py-12">
      <Section className="flex flex-col sm:flex-row gap-y-4 sm:justify-between items-center text-white font-semibold">
        <span className="text-center">Copyright © 2023. All rights are reserved</span>

        <div className="flex justify-center lg:justify-start gap-3 text-2xl">
          {socials.map(({ id, icon, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              {icon}
            </a>
          ))}
        </div>
      </Section>
    </footer>
  );
}
