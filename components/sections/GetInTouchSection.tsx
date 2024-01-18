import HeaderText from "../ui/HeaderText";
import Section from "../ui/Section";
import SvgIcon from "../ui/SvgIcon";
import { contactDetails } from "../constants";

const GetInTouchSection = () => {
  return (
    <Section id="get-in-touch" className="grid gap-8">
      <HeaderText subText="get in touch" className="pb-6">
        {`Don't be shy! Hit me up! 👇`}
      </HeaderText>

      <div className="flex flex-col sm:flex-row gap-y-8 gap-x-20">
        {contactDetails.map(({ id, src, title, description }) => (
          <div
            key={id}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <SvgIcon
              src={`/${src}`}
              size={32}
              className="p-4 bg-containerBg "
            />

            <div className="flex flex-col gap-1 text-center sm:text-left">
              <h1 className="text-light font-semibold">{title}</h1>
              <span className="text-main">{description}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default GetInTouchSection;
