import SectionHeader from "./components/SectionHeader";
import SectionFooter from "./components/SectionFooter";
import SectionMain from "./components/SectionMain";
import StackIcons from "../StackIcons";
import { FaCaretRight } from "react-icons/fa";

const techStack = [
  "React.js",
  "Node.js",
  "JavaScript(ES6)",
  "Express.js",
  "TailwindCSS",
  "MongoDb",
];

export default function AboutSection() {
  return (
    <div id="about" className="py-12">
      <div className="hidden-section w-full">
        <SectionHeader number={1} text="<AboutMe>" />
        <SectionMain className="relative flex flex-col lg:flex-row justify-between lg:gap-12">
          <div className="lg:max-w-lg space-y-4">
            <p>
              Hello! My name is Daniel and I enjoy bringing ideas to life by
              creating web apps. I started my adventure in programming when I
              was in high school with basic knowledge of HTML, CSS, and
              JavaScript. I loved building basic applications with them so I
              went digging deeper into the Web Development world.
            </p>

            <p>
              Im a Compute Science student at Technical University of Varna and
              im currently in my 4th year.
            </p>

            <div>
              <p className="font-semibold text-primary-main">
                Here are a few technologies I’ve been working with recently:
              </p>
              <div className="grid grid-cols-2 mt-4">
                {techStack.map((tech, index) => (
                  <p
                    key={index}
                    className="w-fit col-span-1 flex items-center justify-center gap-2"
                  >
                    <FaCaretRight className="text-sm text-primary-main" />
                    <span>{tech}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <StackIcons />
        </SectionMain>
        <SectionFooter text="</AboutMe>" />
      </div>
    </div>
  );
}
