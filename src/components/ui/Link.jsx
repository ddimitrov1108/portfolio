import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function Link({
  to = "/",
  text = "link",
  className,
  ...restProps
}) {
  return (
    <NavLink
      to={to}
      className={clsx("relative group p-2", className)}
      {...restProps}
    >
      <span className="transition-all duration-300 group-hover:text-primary font-semibold">
        {text}
      </span>
      <div className="absolute bottom-0 right-[50%] transition-all duration-300 w-0 group-hover:w-[50%] h-0.5 bg-primary"></div>
      <div className="absolute bottom-0 left-[50%] transition-all duration-300 w-0 group-hover:w-[50%] h-0.5 bg-primary"></div>
    </NavLink>
  );
}
