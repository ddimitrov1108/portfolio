"use client";

import { useSideBarState } from "../hooks";
import { Logo, SideBar } from "../ui";
import { NavList } from ".";

const HeaderNavigation = () => {
  const [open, setOpen, toggleOpen] = useSideBarState();

  return (
    <>
      <SideBar
        open={open}
        onClose={toggleOpen}
        headerClassName="container py-5"
      >
        <NavList
          className="h-[80vh] flex flex-col items-center justify-center gap-10 p-6 py-24"
          onSideBarClick={() => setOpen(false)}
        />
      </SideBar>

      <header className="z-40 fixed top-0 w-full bg-bodyBg/50 backdrop-blur-md">
        <div className="bg-transparent container py-5 flex items-center justify-between">
          <Logo />

          <NavList className="hidden lg:flex items-center gap-8" />

          <button
            onClick={() => setOpen(true)}
            className="group lg:hidden grid gap-1.5 w-[20px]"
            title="Open Navigation"
          >
            <div className="w-full h-[2px] rounded-full bg-gray-400 group-hover:bg-slate-100"></div>
            <div className="w-full h-[2px] rounded-full bg-gray-400 ml-1.5 group-hover:bg-slate-100"></div>
            <div className="w-full h-[2px] rounded-full bg-gray-400 group-hover:bg-slate-100"></div>
          </button>
        </div>
      </header>
    </>
  );
};
export default HeaderNavigation;
