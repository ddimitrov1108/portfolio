import { useState, useEffect } from "react";
import MobileNavBar from "./MobileNavBar";
import {
  HiOutlineBars3BottomRight,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import pdfResume from "../../assets/cv_eng.pdf";
import clsx from "clsx";

const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Portfolio",
    href: "#portfolio",
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
          "z-40 bg-white/80 backdrop-blur-sm duration-500 px-4 xl:px-8 fixed top-0 left-0 right-0 flex justify-between items-center",
          scrollDir === "scroll-down" ? "-translate-y-40" : "translate-y-0",
          yValue ? "shadow-xl py-2" : "py-3"
        )}
      >
        <div id="logo">
          <a
            href="/"
            className="text-code text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-primary-dark via-primary-main to-cyan-400 font-semibold"
          >
            {"{D}"}
          </a>
        </div>

        <div
          className="header-links lg:hidden p-1 text-4xl text-primary-main cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <HiOutlineBars3BottomRight className="slide-from-top" />
        </div>

        <div className="header-links hidden lg:flex items-center gap-8 text-sm">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="slide-from-top hover:text-primary-main"
              onClick={() => scrollSectionIntoView(link.href)}
            >
              <span className="text-code text-primary-main">{`0${
                index + 1
              }. `}</span>
              {`<${link.name}/>`}
            </a>
          ))}

          <a
            href={pdfResume}
            target="_blank"
            className="slide-from-top flex gap-4 items-center border border-primary-main font-semibold rounded-md px-4 py-2.5"
          >
            <HiOutlineClipboardDocumentList className="text-primary-main text-xl" />
            Resume
          </a>
        </div>
      </header>
    </>
  );
}
