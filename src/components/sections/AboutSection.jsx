import SectionHeader from "./components/SectionHeader";
import SectionFooter from "./components/SectionFooter";
import SectionMain from "./components/SectionMain";
import avatarWebp from "../../assets/avatar.webp";
import { FaCaretRight } from "react-icons/fa";

const techStack = [
  "React.js",
  "Node.js",
  "Redux",
  "Express.js",
  "TailwindCSS",
  "MongoDb",
];

export default function AboutSection() {
  return (
    <div id="about" className="min-h-screen grid items-center py-8">
      <div className="hidden-section w-full">
        <SectionHeader number={1} text="<About Me>" />
        <SectionMain className="relative flex flex-col lg:flex-row justify-between gap-12">
          <div className="lg:max-w-lg space-y-8">
            <p>
              Hello! My name is Daniel and I enjoy bringing ideas to life by
              creating web apps. I started my adventure in programming when I
              was in high school with basic knowledge of HTML, CSS, and
              JavaScript. I loved building basic applications with them so I
              went digging deeper into the world of web development.
            </p>

            <p>
              I'm a Compute Science student at Technical University of Varna and
              I'm currently in my 4th year. Also I'm ambitious and motivated. I
              can work alone or in a team. I accept criticism and advice from
              more experienced colleagues in the environment in which I will be
              placed. I'm ready for opportunities and challenges in an
              environment where innovation, education, and work are valued and
              encouraged.
            </p>

            <div>
              <span>
                Here are a few technologies I’ve been working with recently:
              </span>
              <div className="grid grid-cols-2 mt-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="w-fit col-span-1 flex items-center justify-center gap-2"
                  >
                    <FaCaretRight className="text-sm text-primary-main" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            id="avatar"
            className="w-fit h-fit mx-auto relative group mb-4 shadow-lg"
          >
            <div className="rounded-md -z-10 transition-all w-52 h-52 xs:w-60 xs:h-60 md:w-72 md:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 absolute top-4 left-4 border-2 border-primary-main group-hover:top-3 group-hover:left-3"></div>

            <img
              loading="lazy"
              src={avatarWebp}
              alt="avatarWebp"
              className="bg-white rounded-md lg:rounded-md shadow-lg w-52 h-52 xs:w-60 xs:h-60 md:w-72 md:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
            />
          </div>
        </SectionMain>
        <SectionFooter text="</About Me>" />
      </div>
    </div>
  );
}
