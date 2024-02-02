import Link from "next/link";
import { headerNavLinks } from "../constants";
import { ArrowDownToLine } from "lucide-react";

interface Props {
  className?: string;
  onLinkClick?: React.MouseEventHandler;
}

const NavList = ({ className, onLinkClick }: Props) => {
  return (
    <nav className={className}>
      {headerNavLinks.map(({ id, name, href }) => (
        <Link
          key={id}
          href={href}
          title={name}
          aria-label={name}
          onClick={onLinkClick}
          className="text-center transition-all hover:text-light"
        >
          {name}
        </Link>
      ))}

      <Link
        href="/me/cv.pdf"
        title="Resume"
        aria-label="Resume"
        onClick={onLinkClick}
        target="_blank"
        download="CV-Daniel-Dimitrov"
        rel="noopener noreferrer"
        className="transition-all ease-in-out flex items-center gap-2 bg-primary-main hover:bg-primary-dark rounded-md px-4 py-2 text-white"
      >
        Download CV
        <ArrowDownToLine size={20} />
      </Link>
    </nav>
  );
};
export default NavList;
