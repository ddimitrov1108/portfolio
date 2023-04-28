import Image from "next/image";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

export default function AboutSection() {
  return (
    <div id="about" className="bg-white py-24">
      <Section>
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 items-center lg:gap-28">
          <div className="col-span-2 mb-8 lg:mb-0 bg-[#EAF2FD] rounded-2xl">
            <Image
              src="/responsive-svgrepo-com.svg"
              width="360"
              height="360"
              alt="responsive_svg.svg"
              className="mx-auto w-full max-w-[320px] px-8"
            />
          </div>

          <div className="col-span-3">
            <SectionHeader className="pb-6">
              About Me
              <h4 className="normal-case mt-3 font-bold text-black text-3xl">
                A dedicated Front-end Developer based in Burgas, Bulgaria 📍
              </h4>
            </SectionHeader>
            <p className="text-secondary">
              {`I have always been fascinated by the power of the internet to connect people and businesses worldwide. 
              That's why I decided to pursue a career in web development, so I could play a part in making the web a 
              more beautiful and helpful place. My expertise lies in React, Tailwind, SCSS, HTML, CSS, and JavaScript, 
              and I am always striving to improve my skills and keep up with the latest trends in web development. 
              I am a quick learner and a problem solver, and I love taking on new challenges and finding creative 
              solutions to complex problems.`}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
