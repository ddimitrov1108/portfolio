import clsx from "clsx";
import Link from "next/link";

export default function StyledLink({
  href = "/",
  text = "link",
  active = false,
  className,
  ...restProps
}) {
  return (
    <Link
      href={href}
      className="font-semibold relative group p-2"
      {...restProps}
    >
      <span
        className={clsx(
          "transition-all duration-300 group-hover:text-primary",
          active && "text-primary"
        )}
      >
        {text}
      </span>
      <div
        className={clsx(
          "absolute bottom-0 right-[50%] transition-all duration-300 w-0 group-hover:w-[20%] h-0.5 bg-primary rounded-l-full",
          active && "w-[20%]"
        )}
      ></div>
      <div
        className={clsx(
          "absolute bottom-0 left-[50%] transition-all duration-300 w-0 group-hover:w-[20%] h-0.5 bg-primary rounded-r-full",
          active && "w-[20%]"
        )}
      ></div>
    </Link>
  );
}
