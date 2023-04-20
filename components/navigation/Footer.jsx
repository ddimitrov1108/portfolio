import Link from "next/link";
import Section from "../ui/Section";
import { socials } from "../staticData";

export default function Footer() {
  return (
    <footer className="bg-black w-full py-8 md:py-12">
      <Section className="flex flex-col sm:flex-row gap-y-4 sm:justify-between items-center text-white font-semibold">
        <span className="text-center">Copyright © 2023. All rights are reserved</span>

        <div className="flex justify-center lg:justify-start gap-3 text-2xl">
          {socials.map(({ id, ariaLabel, icon, href }) => (
            <Link
              key={id}
              href={href}
              aria-label={ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-all duration-300"
            >
              {icon}
            </Link>
          ))}
        </div>
      </Section>
    </footer>
  );
}
