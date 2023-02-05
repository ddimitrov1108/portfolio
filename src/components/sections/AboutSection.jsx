import { FaCaretRight } from "react-icons/fa";
import StackIcons from "../StackIcons";
import SectionHeader from "./components/SectionHeader";

const techStack = [
  "React",
  "JavaScript(ES6)",
  "TailwindCSS",
  "Node.js",
  "Express.js",
  "MongoDb",
];

export default function AboutSection() {
  return (
    <div id="about" className="h-screen flex items-center">
      <div className="hidden-section w-full relative grid justify-start">
        <SectionHeader number={1} text="About Me" />

        <StackIcons />

        <div className="section-main lg:max-w-md xl:max-w-xl">
          <p>
          I started my adventure in programming when I was in high school with
            basic knowledge of HTML, CSS, and JavaScript. I loved building basic applications with
            them so I started digging deeper into the Web Development world.
            Learned how to create apps using Bootstrap/JQuery and moved on to
            some Back-end basics with Node.js.
          </p>

          <div className="my-12">
            <p className="font-semibold">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="grid grid-cols-2 mt-8">
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
      </div>
    </div>
  );
}
