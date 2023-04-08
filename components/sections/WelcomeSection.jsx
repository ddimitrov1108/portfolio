import Link from "next/link";
import Image from "next/image";
import Section from "../ui/Section";
import SvgIcon from "../ui/SvgIcon";
import { socials, techStack } from "../staticData";

export default function WelcomeSection() {
  return (
    <Section id="home" className="mx-auto min-h-screen grid items-center py-24">
      <div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0">
          <div className="grid space-y-6">
            <div className="text-center lg:text-left text-3xl xs:text-5xl md:text-6xl md:leading-tight font-bold">
              Front-End React Developer 👋🏼
            </div>
            <div className="leading-relaxed text-center lg:text-left text-secondary md:w-3/4 mx-auto lg:mx-0">
              {`Hello! I'm Daniel Dimitrov. A passionate Front-end React Developer
              based in Burgas, Bulgaria. 📍`}
            </div>

            <div className="flex justify-center lg:justify-start gap-3 text-3xl pt-4">
              {socials?.map(({ id, ariaLabel, icon, href }) => (
                <Link
                  key={id}
                  href={href}
                  ariaLabel={ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-primary transition-all"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="avatar-wobble overflow-hidden shadow-lg bg-white">
            <Image
              src="/avatar.webp"
              alt="avatar.webp"
              width="440"
              height="440"
              className="w-[260px] xs:w-[320px] sm:w-[360px] lg:w-[440px]"
            />
          </div>
        </div>
        <div className="mt-16 md:mt-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="min-w-fit flex flex-col items-center lg:flex-row gap-x-6 gap-y-2">
            <span className="min-w-fit font-semibold">Tech Stack</span>
            <div className="h-[2px] w-[40%] lg:h-[25px] lg:w-[2px] bg-primary rounded-full"></div>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap gap-6">
            {techStack?.map(({ id, src }) => (
              <SvgIcon key={id} src={src} size={32} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
