import Link from "next/link";
import { socialNavLinks } from "../constants";

const SocialLinks = () => {
  return (
    <div className="hidden xl:flex flex-col items-center gap-6 fixed bottom-0 right-6">
      {socialNavLinks.map(({ id, name, href, icon }) => (
        <Link
          key={id}
          href={href}
          title={name}
          className="transition-all text-gray-400 hover:text-active-blue text-2xl"
        >
          {icon}
        </Link>
      ))}

      <div className="w-[0.1px] h-20 bg-gray-400"></div>
    </div>
  );
};
export default SocialLinks;
