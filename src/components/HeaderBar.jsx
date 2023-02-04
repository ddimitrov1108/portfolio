import { useState, useEffect } from "react";
import {
  HiOutlineBars3BottomRight,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import clsx from "clsx";
import MobileNavBar from "./MobileNavBar";
import pdfResume from "../assets/cv_eng.pdf";

const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("scroll-up");
  const [yValue, setYValue] = useState(window.scrollY);

  const scrollSectionIntoView = (sectionId) => {
    const domElement = document.getElementById(sectionId);

    if (domElement) domElement.scrollIntoView();
  };

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const onMobileNavLinkClick = (sectionId) => {
    if (sectionId) scrollSectionIntoView(sectionId);

    setIsOpen(false);
  };

  useEffect(() => {
    const href = window.location.href;
    const pathName = href.substring(href.lastIndexOf("/") + 1);

    if (navLinks.findIndex((link) => link.href === pathName))
      scrollSectionIntoView(pathName);
  }, []);

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
      <MobileNavBar
        navLinks={navLinks}
        open={isOpen}
        onNavLinkClick={onMobileNavLinkClick}
        onClose={() => setIsOpen(!isOpen)}
      />

      <header
        className={clsx(
          "z-40 bg-white/30 backdrop-blur-sm duration-500 px-4 xl:px-12 fixed top-0 left-0 right-0 flex justify-between items-center",
          scrollDir === "scroll-down" ? "-translate-y-40" : "translate-y-0",
          yValue ? "shadow-xl py-3 " : "py-6"
        )}
      >
        <div id="logo">
          <a
            href="http://localhost:5173/"
            className="text-code text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-blue-900 via-primary-main to-cyan-400"
          >
            {"{D}"}
          </a>
        </div>

        <div
          className="header-links lg:hidden p-2 text-3xl text-primary-main cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <HiOutlineBars3BottomRight />
        </div>

        <div className="header-links hidden lg:flex items-center gap-8 text-sm">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-primary-main transition-all"
              onClick={() => scrollSectionIntoView(link.href)}
            >
              <span className="text-code text-primary-main font-semibold">{`0${
                index + 1
              }. `}</span>
              {link.name}
            </a>
          ))}

          <a
            href={pdfResume}
            target="_blank"
            className="flex gap-4 items-center border border-primary-main font-semibold rounded-md px-4 py-2.5"
          >
            <HiOutlineClipboardDocumentList className="text-primary-main text-xl" />
            Resume
          </a>
        </div>
      </header>
    </>
  );
}
