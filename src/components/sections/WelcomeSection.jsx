import { FiLinkedin } from "react-icons/fi";
import avatarPng from "../../assets/avatar.png";

export default function WelcomeSection() {
  return (
    <div id="welcome" className="h-screen flex items-center justify-center">
      <div className="w-full welcome-animation flex flex-col-reverse lg:flex-row justify-between gap-8">
        <div className="w-full text-center lg:text-left">
          <div className="text-4xl md:text-5xl xl:text-6xl">
            <div className="fade-and-slide font-bold ">
              <span>{"Hi! I'm "}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-primary-dark via-primary-main to-cyan-400 font-bold">
                Daniel.
              </span>
            </div>
            <div className="fade-and-slide text-transparent bg-clip-text bg-gradient-to-t from-primary-dark via-primary-main to-cyan-400 font-bold">
              <span>Web Developer.</span>
            </div>
          </div>

          <div className="welcome-description mt-4">
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

        <div
          id="avatar"
          className="shadow-xl p-0.5 -mt-14 flex items-center justify-center w-fit h-fit lg:min-w-fit lg:min-h-fit mx-auto lg:mx-0 lg:ml-auto rounded-full bg-gradient-to-tr from-primary-dark via-primary-main to-cyan-400 font-bold"
        >
          <img
            src={avatarPng}
            alt="avatarPng"
            className="bg-white rounded-full w-36 h-36 md:w-40 md:h-40 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
          />
        </div>
      </div>
    </div>
  );
}
