import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

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
      </Section>
    </div>
  );
}
