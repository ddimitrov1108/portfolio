import { FiLinkedin } from "react-icons/fi";
import StackIcons from "../StackIcons";

export default function WelcomeSection() {
  return (
    <div id="welcome" className="h-screen flex items-center justify-center">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between lg:gap-14">
        <div className="">
          <div
            id="me-introduction"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
          >
            <span>{"Hi! I'm "}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-blue-800 via-primary-main to-cyan-400">
              Daniel
            </span>

            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-t from-blue-800 via-primary-main to-cyan-400">
              Web Developer
            </span>
          </div>

          <div id="me-description" className="space-y-6 mt-6">
            <p className="text-base">
              I'm a growing developer specializing in building and designing
              stuff for the web. I'm currently a student in search of more
              knowledge and opportunities.
            </p>

            <a
              href="https://www.linkedin.com/in/daniel-dimitrov-94593a180/"
              target="_blank"
              className="text-base mt-8 w-fit px-8 py-3 flex gap-4 items-center rounded-md border border-primary-main font-semibold"
            >
              <FiLinkedin className="text-primary-main text-xl" /> Let's talk
            </a>
          </div>
        </div>

        {/* <StackIcons className="hidden lg:block -top-12" /> */}
      </div>
    </div>
  );
}
