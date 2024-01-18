import Image from "next/image";
import clsx from "clsx";
import Section from "../ui/Section";
import SvgIcon from "../ui/SvgIcon";
import HeaderText from "../ui/HeaderText";
import ExperienceTabs from "../ExperienceTabs";
import { techStackIcons } from "../constants";

const AboutMeSection = () => {
  return (
    <Section
      id="about-me"
      className="mx-auto min-h-screen grid items-center py-24"
    >
      <div className="w-full flex flex-col-reverse lg:flex-row gap-y-16 justify-between items-start">
        <div className="hidden lg:flex relative w-fit items-center justify-center before:transition-all col-span-2 place-items-center before:absolute before:h-[260px] before:w-[260px] before:left-[50%] before:-translate-x-[50%] before:top-[55%] before:-translate-y-[55%] before:rounded-full before:bg-gradient-radial before:dark:from-[#1a1a1a] before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br">
          <Image
            src="/atom.svg"
            width={512}
            height={512}
            className="relative pointer-events-none select-none"
            alt="atom.webp"
          />

          {techStackIcons.map(({ id, src, className }) => (
            <SvgIcon
              key={id}
              src={`/tech/${src}`}
              className={clsx(
                "p-3 bg-[#171717] transition-all absolute hover:scale-[115%]",
                className
              )}
            />
          ))}
        </div>

        <div className="lg:w-2/4 grid gap-8">
          <HeaderText subText="about me">
            A dedicated Front-end Developer based in Burgas, Bulgaria📍
          </HeaderText>

          <p className="text-main">
            {`As a fifth-year Computer Science student, I specialize in Front-End development, mastering HTML5, CSS3, JavaScript, ReactJS for Single-Page Applications, and Next.js for server-side rendering to optimize performance in modern web design. My passion lies in crafting visually engaging and interactive web experiences, and I'm driven by ambition to take on challenging projects that push my skills further.`}
          </p>

          <div className="grid gap-4">
            <h1 className="text-light font-semibold">My experience so far:</h1>
            <ExperienceTabs />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default AboutMeSection;
