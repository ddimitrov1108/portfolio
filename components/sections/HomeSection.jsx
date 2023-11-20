import Link from "next/link";
import Image from "next/image";
import { Section } from "../ui";
import { socialNavLinks } from "../constants";

const HomeSection = () => {
  return (
    <Section id="home" className="mx-auto min-h-screen grid items-center py-24">
      <div className="flex flex-col-reverse lg:grid grid-cols-5 gap-12 lg:gap-0">
        <div className="col-span-3 flex flex-col gap-8 justify-center">
          <div className="text-center lg:text-left md:leading-tight bg-gradient-to-r from-active-blue to-active-red lg:to-75% text-transparent bg-clip-text">
            <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              Front-End React Developer
            </h1>
          </div>

          <div className="leading-relaxed text-center lg:text-left text-gray-400 md:w-3/5 mx-auto lg:mx-0">
            {`Hi! I'm Daniel. A passionate software engineer based in Burgas, Bulgaria. 📍`}
          </div>

          <div className="flex justify-center lg:justify-start gap-4">
            {socialNavLinks.map(({ id, name, href, icon }) => (
              <Link
                key={id}
                href={href}
                title={name}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all text-gray-400 hover:text-slate-100 text-3xl"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-2 relative flex items-center justify-center place-items-center before:transition-all after:transition-all before:duration-500 after:duration-500  before:absolute before:h-[300px] before:lg:h-[500px] before:w-[240px] before:sm:w-[340px] before:lg:w-[440px] before:-translate-x-1/3 before:md:-translate-x-1/4 after:h-[120px] after:sm:h-[200px] after:md:h-[240px] after:w-[120px]  after:xs:w-[140px] after:lg:w-[240px] after:translate-x-1/3 before:rounded-full before:bg-gradient-radial before:from-bodyBg before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20  after:bg-gradient-conic after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-active-blue/40 after:from-active-red">
          <div className="w-full flex items-center justify-center relative">
            <Image
              src="/me/avatar.webp"
              alt="avatar.webp"
              width={500}
              height={500}
              className="select-none pointer-events-none rounded-full relative w-[220px] xs:w-[260px] sm:w-[300px] lg:w-[400px]"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default HomeSection;
