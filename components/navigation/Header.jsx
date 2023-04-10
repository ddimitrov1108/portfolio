"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import StyledLink from "../ui/StyledLink";
import MobileNav from "./MobileNav";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";

const navLinks = [
  { id: uuidv4(), text: "Home", href: "/" },
  { id: uuidv4(), text: "About", href: "/#about" },
  { id: uuidv4(), text: "Portfolio", href: "/#portfolio" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("scroll-up");
  const [yValue, setYValue] = useState(0);

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
      <MobileNav
        navLinks={navLinks}
        open={isOpen}
        onNavLinkClick={closeMobileMenu}
        onClose={toggleMobileMenu}
      />

      <header
        className={clsx(
          "backdrop-blur-sm z-40 py-5 bg-white duration-500 px-6 xl:px-12 fixed top-0 left-0 right-0 flex justify-between items-center",
          scrollDir === "scroll-down" ? "-translate-y-40" : "translate-y-0",
          yValue ? "shadow-md" : "shadow-sm"
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
          {navLinks.map(({ id, text, href }) => (
            <StyledLink key={id} href={href} text={text} />
          ))}

          <Link
            href="/#contact"
            className="py-2 px-6 bg-primary text-white font-semibold rounded-full"
          >
            {"Get in touch"}
          </Link>
        </nav>
      </header>
    </>
  );
}
