import clsx from "clsx";
import { VscClose } from "react-icons/vsc";
import pdfResume from "../assets/cv_eng.pdf";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export default function MobileNavBar({
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
          "z-50 transition-all fixed top-0 right-0 left-0 bottom-0 bg-black/30 backdrop-blur-sm",
          open ? "block" : "hidden"
        )}
      ></div>
      <div
        className={clsx(
          "z-50 fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white transition-all ease-in-out duration-300",
          open ? "translate-x-0 " : "translate-x-full"
        )}
      >
        <div className="p-6 flex flex-col">
          <button
            className="my-2 text-3xl w-fit ml-auto text-primary-main"
            onClick={onClose}
          >
            <VscClose />
          </button>

          <div className="header-links-mobile h-[75vh] flex flex-col items-center justify-center gap-8 text-base">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className=" hover:text-primary-main text-center"
                onClick={() => onNavLinkClick(link.href)}
              >
                <span className="text-code text-primary-main font-semibold">{`0${
                  index + 1
                }. `}</span>
                <br />
                {link.name}
              </a>
            ))}

            <a
              href={pdfResume}
              target="_blank"
              className="flex gap-4 items-center border border-primary-main font-semibold rounded-md px-8 py-2.5"
              onClick={() => onNavLinkClick()}
            >
              <HiOutlineClipboardDocumentList className="text-primary-main text-xl" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
