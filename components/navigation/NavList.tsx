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
        href="/cv.pdf"
        title="Resume"
        aria-label="Resume"
        onClick={onLinkClick}
        target="_blank"
        download="CV-Daniel-Dimitrov"
        className="group relative duration-500 ease-in-out text-light font-medium rounded-md bg-gradient-to-r from-primary-main to-secondary-main p-[1px]"
      >
        <div className="transition-all px-4 py-1.5 bg-bodyBg group-hover:bg-transparent rounded-md overflow-hidden">
          Resume
        </div>
      </Link>
    </nav>
  );
};
export default NavList;
