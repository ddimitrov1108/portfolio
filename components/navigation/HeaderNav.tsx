"use client";

import useSideBarState from "../hooks/useSideBarState";
import Logo from "../ui/Logo";
import NavList from "./NavList";
import dynamic from "next/dynamic";

const SideBar = dynamic(() => import("../ui/SideBar"));

const HeaderNav = () => {
  const [open, setOpen, toggleOpen] = useSideBarState();

  const onSideBarToggle = () => toggleOpen();
  const onLinkClick = () => setOpen(false);

  return (
    <>
      <SideBar
        open={open}
        setOpen={onSideBarToggle}
        headerClassName="container py-5"
      >
        <NavList
          className="h-[80vh] flex flex-col items-center justify-center gap-10 p-6 py-24"
          onLinkClick={onLinkClick}
        />
      </SideBar>

      <header className="z-40 fixed top-0 w-full bg-bodyBg/50 backdrop-blur-md">
        <div className="bg-transparent container py-4 flex items-center justify-between">
          <Logo />

          <NavList className="hidden lg:flex items-center gap-8" />

          <button
            onClick={onSideBarToggle}
            className="group lg:hidden flex flex-col items-end gap-1.5 w-[22px]"
            title="Open navigation"
          >
            <div className="transition-all w-full h-[2px] rounded-full bg-main group-hover:bg-light group-hover:w-[80%]"></div>
            <div className="transition-all w-[60%] h-[2px] rounded-full bg-main ml-1.5 group-hover:bg-light group-hover:w-full"></div>
            <div className="transition-all w-[80%] h-[2px] rounded-full bg-main group-hover:bg-light group-hover:w-[60%]"></div>
          </button>
        </div>
      </header>
    </>
  );
};
export default HeaderNav;
