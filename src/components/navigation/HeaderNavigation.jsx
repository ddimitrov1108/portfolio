import { useState, useEffect } from "react";
import MobileNavigation from "./MobileNavigation";
import Link from "../ui/Link";
import { FaChevronUp } from "react-icons/fa";
import {
  HiOutlineBars3BottomRight,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import pdfResume from "../../assets/cv_eng.pdf";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import Logo from "../ui/Logo";

const navLinks = [
  { id: uuidv4(), text: "Home", href: "/" },
  { id: uuidv4(), text: "About", href: "about" },
  { id: uuidv4(), text: "Experience", href: "experience" },
  { id: uuidv4(), text: "Portfolio", href: "portfolio" },
  { id: uuidv4(), text: "Get in touch", href: "get-in-touch" },
];

export default function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("scroll-up");
  const [yValue, setYValue] = useState(window.scrollY);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? "scroll-down" : "scroll-up");
      setYValue(scrollY);
      setIsOpen(false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <>
      <MobileNavigation
        navLinks={navLinks}
        open={isOpen}
        onNavLinkClick={closeMobileMenu}
        onClose={toggleMobileMenu}
      />

      <header
        className={clsx(
          "backdrop-blur-sm z-40 bg-white duration-500 px-6 xl:px-12 fixed top-0 left-0 right-0 flex justify-between items-center",
          scrollDir === "scroll-down" ? "-translate-y-40" : "translate-y-0",
          yValue ? "shadow-md py-3" : "shadow-sm py-4 sm:py-5"
        )}
      >
        <Logo />

        <div
          className="lg:hidden flex flex-col gap-1.5 min-w-[25px] cursor-pointer group"
          onClick={toggleMobileMenu}
        >
          <div className="w-full h-[3px] rounded-full bg-primary"></div>
          <div className="w-full h-[3px] rounded-full bg-primary ml-1.5"></div>
          <div className="w-full h-[3px] rounded-full bg-primary"></div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ id, text, href }, index) => (
            <Link key={id} text={text} to={href} />
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
      </header>
    </>
  );
}
