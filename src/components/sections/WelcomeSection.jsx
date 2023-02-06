import { FiLinkedin } from "react-icons/fi";
import avatarWebp from "../../assets/avatar.webp";

export default function WelcomeSection() {
  return (
    <div id="welcome" className="h-screen flex items-center justify-center">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-8">
        <div className="text-center lg:text-left">
          <div
            id="me-introduction"
            className="text-4xl md:text-5xl xl:text-6xl font-bold"
          >
            <span>{"Hi! I'm "}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-primary-dark via-primary-main to-cyan-400">
              Daniel.
            </span>
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-t from-primary-dark via-primary-main to-cyan-400">
              Web Developer.
            </span>
          </div>

          <div id="me-description" className="mt-4">
            <p className="mx-auto lg:mx-0 max-w-[600px] text-base">
              I'm a wannabe web developer specializing in building (and
              sometimes designing) stuff for the Web. I'm currently a student in
              search of more knowledge and opportunities.
            </p>

            <a
              href="https://www.linkedin.com/in/daniel-dimitrov-94593a180/"
              target="_blank"
              className="text-base mt-8 mx-auto lg:mx-0 w-fit px-8 py-3 flex gap-4 items-center rounded-md border border-primary-main font-semibold"
            >
              <FiLinkedin className="text-primary-main text-xl" /> Let's talk
            </a>
          </div>
        </div>

        <div id="avatar" className="relative group">
          <div className="rounded-md hidden lg:block -z-10 transition-all w-full h-full border-2 border-primary-main absolute lg:-top-12 lg:-right-4 group-hover:lg:-top-[52px] group-hover:lg:-right-3 xl:-top-10 xl:-right-4 group-hover:xl:-top-11 group-hover:xl:-right-3"></div>

          <img
            loading="lazy"
            src={avatarWebp}
            alt="avatarWebp"
            className="bg-white rounded-full lg:rounded-md shadow-lg border border-secondary-light/60 -mt-14 mx-auto lg:mx-0 lg:ml-auto w-36 h-36 md:w-40 md:h-40 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
          />
        </div>
      </div>
    </div>
  );
}
