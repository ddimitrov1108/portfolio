import Link from "next/link";
import { headerNavLinks } from "../constants";

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
        className="flex items-center gap-2 hover:text-light"
      >
        Resume
      </Link>
    </nav>
  );
};
export default NavList;
