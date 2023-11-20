import clsx from "clsx";

export default function Section({
  className = "",
  children = null,
  ...restProps
}) {
  return (
    <div className={clsx("container py-24", className)} {...restProps}>
      {children}
    </div>
  );
}
