import Link from "next/link";
import { socialNavLinks } from "../constants";

const SocialLinks = () => {
  return (
    <div className="hidden xl:flex flex-col items-center gap-6 fixed bottom-0 right-8">
      {socialNavLinks.map(({ id, name, href, icon }) => (
        <Link
          key={id}
          href={href}
          title={name}
          aria-label={name}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all text-main hover:text-light"
        >
          {icon}
        </Link>
      ))}

      <div className="w-[0.1px] h-24 bg-main"></div>
    </div>
  );
};
export default SocialLinks;
