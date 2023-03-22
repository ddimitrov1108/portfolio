import clsx from "clsx";

export default function Logo({ className, ...restProps }) {
  return (
    <a
      id="logo"
      href="/"
      className={clsx(
        "font-semibold text-code text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 via-primary to-cyan-400",
        className
      )}
      {...restProps}
    >
      {"{ D }"}
    </a>
  );
}
