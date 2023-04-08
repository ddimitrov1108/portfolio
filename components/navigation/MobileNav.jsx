import { VscClose } from "react-icons/vsc";
import clsx from "clsx";
import StyledLink from "../ui/StyledLink";
import Link from "next/link";
import Logo from "../ui/Logo";

export default function MobileNav({
  navLinks = [],
  open,
  onNavLinkClick,
  onClose,
  ...restProps
}) {
  return (
    <div className={clsx("lg:hidden z-50 w-full h-full")} {...restProps}>
      <div
        onClick={onClose}
        className={clsx(
          "z-50  fixed top-0 right-0 left-0 bottom-0 sm:backdrop-blur-sm sm:bg-gray-200/20",
          open ? "block" : "hidden"
        )}
      ></div>
      <div
        className={clsx(
          "z-50 fixed top-0 right-0 w-full sm:w-1/2 h-full bg-white transition-all ease-in-out duration-300",
          open ? "translate-x-0 " : "translate-x-full"
        )}
      >
        <div className="p-6 pt-4 pr-4 grid">
          <div className="flex items-center justify-between sm:justify-end">
            <Logo className="block sm:hidden" />

            <button
              aria-label="Затвори меню"
              className="text-4xl w-fit ml-auto text-headerText hover:text-primary transition-all duration-300"
              onClick={onClose}
            >
              <VscClose />
            </button>
          </div>

          <nav className="h-[80vh] flex flex-col items-center justify-center gap-8 text-lg">
            {navLinks.map(({ id, text, href }) => (
              <StyledLink
                key={id}
                href={href}
                text={text}
                onClick={onNavLinkClick}
              />
            ))}

            <Link
              href="/#contact"
              className="py-2 px-6 bg-primary text-white font-semibold rounded-full"
            >
              {"Get in touch"}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
