"use client";

import Link from "next/link";
import { GetInTouchButton } from ".";
import { headerNavLinks } from "../constants";
import clsx from "clsx";

const NavList = ({ className, onSideBarClick }) => {
  return (
    <nav className={className}>
      {headerNavLinks.map(({ id, name, href, className }) => (
        <Link
          key={id}
          href={href}
          title={name}
          aria-label={name}
          onClick={onSideBarClick}
          className={clsx(
            "text-center transition-all text-gray-400 hover:text-slate-100",
            className
          )}
        >
          {name}
        </Link>
      ))}

      <GetInTouchButton onClick={onSideBarClick} />
    </nav>
  );
};
export default NavList;
