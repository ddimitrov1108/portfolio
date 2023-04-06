import clsx from "clsx";

export default function Section({
  className = "",
  children = null,
  ...restProps
}) {
  return (
    <div className={clsx("px-6 max-w-5xl mx-auto", className)} {...restProps}>
      {children}
    </div>
  );
}
