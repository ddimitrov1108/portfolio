import clsx from "clsx";

export default function SectionHeader({
  className = "",
  children = null,
  ...restProps
}) {
  return (
    <div className={clsx("text-lg uppercase pb-6 text-primary font-bold", className)} {...restProps}>
      {children}
    </div>
  );
}
