import avatarWebp from "../../assets/avatar.webp";
import reactSvg from "../../assets/react.svg";
import tailwindcssSvg from "../../assets/tailwindcss.svg";
import headlessuiSvg from "../../assets/headlessui.svg";
import sassSvg from "../../assets/sass.svg";
import htmlSvg from "../../assets/html.svg";
import cssSvg from "../../assets/css.svg";
import jsSvg from "../../assets/js.svg";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

const socials = [
  {
    id: uuidv4(),
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/daniel-dimitrov-94593a180/",
  },
  {
    id: uuidv4(),
    icon: <FiGithub />,
    href: "https://github.com/ddimitrov1108",
  },
];

const techStack = [
  { id: uuidv4(), href: "https://react.dev/", svg: reactSvg, alt: "react.svg" },
  {
    id: uuidv4(),
    href: "https://tailwindcss.com/",
    svg: tailwindcssSvg,
    alt: "tailwindcss.svg",
  },
  {
    id: uuidv4(),
    href: "https://headlessui.com/",
    svg: headlessuiSvg,
    alt: "headlessui.svg",
  },
  {
    id: uuidv4(),
    href: "https://sass-lang.com/",
    svg: sassSvg,
    alt: "sass.svg",
  },
  {
    id: uuidv4(),
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    svg: htmlSvg,
    alt: "html.svg",
  },
  {
    id: uuidv4(),
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    svg: cssSvg,
    alt: "css.svg",
  },
  {
    id: uuidv4(),
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    svg: jsSvg,
    alt: "js.svg",
  },
];

export default function WelcomeSection() {
  return (
    <div className="px-6 max-w-5xl mx-auto min-h-screen grid items-center py-24">
      <div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0">
          <div className="grid space-y-6">
            <div className="text-center lg:text-left text-3xl xs:text-5xl md:text-6xl md:leading-tight font-bold">
              Front-End React Developer
            </div>
            <div className="text-center lg:text-left text-[#767676] md:w-3/4 mx-auto lg:mx-0">
              Hello! I'm Daniel Dimitrov. A passionate Front-end React Developer
              based in Burgas, Bulgaria.
            </div>

            <div className="flex justify-center lg:justify-start gap-2 text-3xl">
              {socials.map(({ id, icon, href }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-black hover:text-primary transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="avatar-wobble overflow-hidden shadow-lg bg-white">
            <img
              src={avatarWebp}
              alt="avatar.webp"
              className="w-[200px] xs:[320px] sm:[360px] lg:w-[440px]"
            />
          </div>
        </div>
        <div className="mt-16 md:mt-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="max-h-fit border-b-2 text-center px-6 py-2 lg:py-0 lg:pl-0 lg:pr-6 lg:border-b-0 lg:border-r-2 border-black/60 font-semibold">
            Tech Stack
          </div>
          <div className="flex justify-center flex-wrap gap-6">
            {techStack.map(({ id, href, svg, alt }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid items-center p-4 bg-white shadow-md rounded-full"
              >
                <img src={svg} width="32px" height="32px" alt={alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
