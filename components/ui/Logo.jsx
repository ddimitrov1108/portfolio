import clsx from "clsx";
import Link from "next/link";

export default function Logo({ className, ...restProps }) {
  return (
    <Link
      id="logo"
      href="/"
      className={clsx(
        "font-semibold text-3xl",
        className
      )}
      {...restProps}
    >
      {"{D}"}
    </Link>
  );
}
