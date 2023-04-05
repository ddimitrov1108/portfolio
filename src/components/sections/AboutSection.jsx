import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import responsiveSvg from "../../assets/responsive-svgrepo-com.svg";

export default function AboutSection() {
  return (
    <div className="bg-white pb-20 lg:py-32">
      <Section id="about" className="mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 items-center lg:gap-20">
          <div className="col-span-2">
            <img
              src={responsiveSvg}
              width="100%"
              alt="responsive_svg.svg"
              className="mx-auto max-w-[360px]"
            />
          </div>

          <div className="col-span-3 text-center lg:text-left">
            <SectionHeader>
              About Me
              <h4 className="normal-case mt-3 font-bold text-black text-2xl">
                A dedicated Front-end Developer based in Burgas, Bulgaria 📍
              </h4>
            </SectionHeader>
            <p className="text-secondary">
              I have always been fascinated by the power of the internet to
              connect people and businesses all over the world. That's why I
              decided to pursue a career in web development, so I could play a
              part in making the web a more beautiful and useful place. My
              expertise lies in React, Tailwind, SCSS, HTML, CSS and JavaScript,
              and I am always striving to improve my skills and keep up with the
              latest trends in web development. I am a quick learner and a
              problem solver, and I love taking on new challenges and finding
              creative solutions to complex problems.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
