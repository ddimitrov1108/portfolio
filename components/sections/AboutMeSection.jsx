import Image from "next/image";
import { Section, SectionHeader, SvgIcon } from "../ui";
import { technologies, technologiesIcons } from "../constants";
import clsx from "clsx";

const AboutMeSection = () => {
  return (
    <Section
      id="about-me"
      className="mx-auto min-h-screen grid items-center py-24"
    >
      <div className="w-full flex flex-col-reverse lg:flex-row gap-y-16 justify-between items-center">
        <div className="hidden lg:flex relative w-fit items-center justify-center before:transition-all col-span-2 place-items-center before:absolute before:h-[320px] before:w-[320px] before:left-[50%] before:-translate-x-[50%] before:top-[50%] before:-translate-y-[50%] before:rounded-full before:bg-gradient-radial before:dark:from-[#1a1a1a] before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br">
          <Image
            src="/atom.webp"
            width={512}
            height={512}
            className="relative pointer-events-none select-none"
            alt="atom.webp"
          />

          {technologiesIcons.map(({ id, src, className }) => (
            <SvgIcon
              key={id}
              src={`/tech/${src}`}
              alt={src}
              className={clsx("absolute hover:scale-[115%]", className)}
            />
          ))}
        </div>

        <div className="lg:w-2/4 grid gap-8">
          <SectionHeader subtext="about me">
            A dedicated Front-end Developer based in Burgas, Bulgaria📍
          </SectionHeader>

          <p className="text-gray-400">
            {`As a fifth-year Computer Science student, I specialize in Front-End development, mastering HTML5, CSS3, JavaScript, ReactJS for Single-Page Applications, and Next.js for server-side rendering to optimize performance in modern web design. My passion lies in crafting visually engaging and interactive web experiences, and I'm driven by ambition to take on challenging projects that push my skills further.`}
          </p>

          <div className="grid gap-4">
            <h1 className="font-semibold">My experience so far:</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-0 text-gray-400 max-w-fit">
              {technologies.map(({ id, name, years }) => (
                <div key={id} className="col-span-1 flex items-center gap-3">
                  <span>+</span>
                  <div>
                    <span className="font-semibold">{years}</span>
                    {` years using `}
                    <span className="font-medium text-active-blue">{name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default AboutMeSection;
