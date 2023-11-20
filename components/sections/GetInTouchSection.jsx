import Image from "next/image";
import { Section, SectionHeader } from "../ui";
import { contactDetails } from "../constants";

const GetInTouchSection = () => {
  return (
    <Section id="get-in-touch" className="grid gap-8">
      <SectionHeader subtext="get in touch" className="pb-6">
        {`Don't be shy! Hit me up! 👇`}
      </SectionHeader>

      <div className="flex flex-col sm:flex-row gap-y-8 gap-x-20">
        {contactDetails.map(({ id, src, title, description }) => (
          <div
            key={id}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="grid items-center p-4 bg-containerBg shadow-md rounded-full cursor-pointer">
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
              <span className="text-slate-400">{description}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default GetInTouchSection;
