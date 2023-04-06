import clsx from "clsx";

export default function SectionHeader({
  className = "",
  children = null,
  ...restProps
}) {
  return (
    <div className={clsx("text-base uppercase text-primary font-bold", className)} {...restProps}>
      {children}
    </div>
  );
}
