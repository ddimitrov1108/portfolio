import SectionHeader from "./components/SectionHeader";
import SectionFooter from "./components/SectionFooter";
import SectionMain from "./components/SectionMain";
import StackIcons from "../StackIcons";
import { FaCaretRight } from "react-icons/fa";

const techStack = [
  "React.js",
  "JavaScript(ES6)",
  "TailwindCSS",
  "Node.js",
  "Express.js",
  "MongoDb",
];

export default function AboutSection() {
  return (
    <div id="about" className="py-4">
      <div className="hidden-section w-full">
        <SectionHeader number={1} text="<a little about me>" />
        <SectionMain className="relative flex flex-col lg:flex-row justify-between lg:gap-12">
          <div className="lg:max-w-lg text-justify">
            <p>
              I started my adventure in programming when I was in high school
              with basic knowledge of HTML, CSS, and JavaScript. I loved
              building basic applications with them so I went digging deeper
              into the Web Development world.
            </p>

            <div className="mt-6 mb-8">
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
        <SectionFooter text="</a little about me>" />
      </div>
    </div>
    // <div id="about" className="h-screen flex items-start py-4">
    //   <div className="hidden-section w-full flex flex-col justify-center md:flex-row md:justify-between items-center">
    //     <div>
    //       <SectionHeader number={1} text="About Me" />
    //       <div className="section-main">
    //         <div className="sm:max-w-md xl:max-w-xl">
    //           <p>
    //             I started my adventure in programming when I was in high school
    //             with basic knowledge of HTML, CSS, and JavaScript. I loved
    //             building basic applications with them so I went digging
    //             deeper into the Web Development world.
    //           </p>

    //           <div className="mt-6 mb-8">
    //             <p className="font-semibold">
    //               Here are a few technologies I’ve been working with recently:
    //             </p>
    //             <div className="grid grid-cols-2 mt-4">
    //               {techStack.map((tech, index) => (
    //                 <p
    //                   key={index}
    //                   className="w-fit col-span-1 flex items-center justify-center gap-2"
    //                 >
    //                   <FaCaretRight className="text-sm text-primary-main" />
    //                   <span>{tech}</span>
    //                 </p>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <StackIcons />
    //   </div>
    // </div>
  );
}
