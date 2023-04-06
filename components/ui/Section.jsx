import clsx from "clsx";

export default function Section({
  className = "",
  children = null,
  ...restProps
}) {
  return (
    <div className={clsx("text-center lg:text-left px-6 max-w-5xl mx-auto", className)} {...restProps}>
      {children}
    </div>
  );
}
