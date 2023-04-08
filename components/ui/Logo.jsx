import Link from "next/link";
import clsx from "clsx";

export default function Logo({ className, ...restProps }) {
  return (
    <Link
      id="logo"
      href="/"
      className={clsx(
        "font-bold text-xl",
        className
      )}
      {...restProps}
    >
      {"Dimitrov.dev"}
    </Link>
  );
}
