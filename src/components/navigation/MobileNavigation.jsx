import Logo from "../ui/Logo";
import Link from "../ui/Link";
import pdfResume from "../../assets/cv_eng.pdf";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";
import clsx from "clsx";

export default function MobileNavigation({
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
          "z-50  fixed top-0 right-0 left-0 bottom-0 sm:backdrop-blur-sm sm:bg-gray-200/60",
          open ? "block" : "hidden"
        )}
      ></div>
      <div
        className={clsx(
          "z-50 fixed top-0 right-0 w-full sm:w-1/2 h-full bg-white transition-all ease-in-out duration-300",
          open ? "translate-x-0 " : "translate-x-full"
        )}
      >
        <div className="p-6 grid">
          <div className="flex justify-end">
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
              <Link key={id} to={href} text={text} onClick={onNavLinkClick} />
            ))}

            <a
              href={pdfResume}
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 items-center border text-primary border-primary font-semibold rounded-md px-4 py-2"
            >
              <HiOutlineClipboardDocumentList className="text-primary text-xl" />
              Resume
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
