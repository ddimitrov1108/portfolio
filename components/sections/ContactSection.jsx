import Image from "next/image";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { contactDetails } from "../staticData";

export default function ContactSection() {
  return (
    <div id="contact" className="bg-white py-24">
      <Section>
        <SectionHeader className="pb-6">
          Contact Me
          <h4 className="normal-case mt-3 font-bold text-black text-3xl">
            {"Don't be shy! Hit me up! 👇"}
          </h4>
        </SectionHeader>

        <div className="pt-12 flex flex-col sm:flex-row gap-y-8 gap-x-20">
          {contactDetails?.map(({ id, src, title, description }) => (
            <div
              key={id}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="grid items-center p-4 bg-white shadow-md rounded-full cursor-pointer">
                <Image
                  src={`/${src}`}
                  alt={src}
                  width={64}
                  height={64}
                  className="object-fill w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
                />
              </div>
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <h5 className="font-semibold">{title}</h5>
                <span className="text-secondary">{description}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
