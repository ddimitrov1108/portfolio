import React from "react";
import { FiLinkedin } from "react-icons/fi";
import StackIcons from "../StackIcons";

export default function WelcomeSection() {
  return (
    <div
      id="welcome"
      className="relative h-screen flex items-center justify-center sm:justify-start"
    >
      <div className="w-full relative welcome-animation text-center lg:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <StackIcons />

        <div className="fade-and-slide font-bold ">
          {"Hi! I'm "}
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-primary-dark via-primary-main to-cyan-400 font-bold ">
            Daniel.
          </span>
        </div>
        <div className="fade-and-slide mt-4 text-transparent bg-clip-text bg-gradient-to-t from-primary-dark via-primary-main to-cyan-400 font-bold ">
          Web Developer.
        </div>

        <div className="welcome-description mt-8">
          <p className="mx-auto lg:mx-0 max-w-[600px] text-base">
            I'm a wannabe web developer specializing in building (and sometimes
            designing) stuff for the Web. I'm currently a student in search of
            more knowledge and opportunities.
          </p>

          <a
            href="https://www.linkedin.com/in/daniel-dimitrov-94593a180/"
            target="_blank"
            className="text-base mt-8 mx-auto lg:mx-0 w-fit px-8 py-4 flex gap-4 items-center rounded-md border border-primary-main font-semibold"
          >
            <FiLinkedin className="text-primary-main text-xl" /> Let's talk
          </a>
        </div>
      </div>
    </div>
  );
}

/*

      <div className="hidden mt-6 lg:flex flex-col gap-8 text-3xl">
        <FiGithub className="transition-all cursor-pointer hover:text-primary-main" />
        <FiLinkedin className="transition-all cursor-pointer hover:text-primary-main" />
        <FiMail className="transition-all cursor-pointer hover:text-primary-main" />
        <div className="mx-auto w-1.5 h-52 border bg-primary-main rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-12 justify-center items-center lg:items-start">
        <MyAvatar />

        <div className="text-center lg:text-left font-bold leading-relaxed text-3xl lg:leading-relaxed lg:text-6xl ">
          <span>{"Hello, I'm "}</span>
          <span className="text-primary-main">Daniel</span>
          <br />
          <span className="text-primary-main">Web Developer</span>

          <div className="flex flex-col gap-8 lg:gap-4 my-8">
            <p className="max-w-[600px] text-base lg:text-lg font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              quis aspernatur laboriosam dolores odio consectetur, doloremque
              placeat harum, molestias debitis assumenda accusantium praesentium
              fuga suscipit rerum neque, delectus excepturi cumque.
            </p>
            <button className="mx-auto lg:mx-0 w-fit px-8 py-3 text-base rounded-md bg-primary-main text-white font-semibold">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      */
