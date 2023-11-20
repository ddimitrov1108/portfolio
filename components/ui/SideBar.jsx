"use client";
import { Logo } from ".";
import { FaXmark } from "react-icons/fa6";
import clsx from "clsx";

const SideBar = ({
  title,
  open,
  onClose,
  children,
  className,
  containerClassName,
  overlayClassName,
  headerClassName,
  ...restProps
}) => {
  return (
    <div className="lg:hidden z-50 w-full h-full" {...restProps}>
      <div
        onClick={onClose}
        className={clsx(
          "z-50 transition-all fixed top-0 right-0 left-0 bottom-0 sm:backdrop-blur-sm sm:bg-containerBg/20",
          overlayClassName,
          open ? "block" : "hidden"
        )}
      ></div>
      <div
        className={clsx(
          "z-50 fixed top-0 w-full h-full sm:w-1/2 transition-all ease-in-out duration-300 bg-bodyBg",
          open ? "left-0" : "-left-full",
          containerClassName
        )}
      >
        <div className="h-full overflow-auto styled-overflow">
          <div className="relative grid">
            <div
              className={clsx(
                "flex items-center w-full justify-between",
                headerClassName
              )}
            >
              <Logo />

              <button
                tabIndex={0}
                type="button"
                className="grid items-center justify-center transition-all rounded-full outline-none text-gray-400 hover:text-slate-100 text-xl"
                onClick={onClose}
                title="Close Navigation"
              >
                <FaXmark />
              </button>
            </div>

            <div className={clsx("", className)}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
