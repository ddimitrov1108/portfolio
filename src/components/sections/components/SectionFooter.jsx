import clsx from "clsx";

export default function SectionFooter({ text = "", className, ...restProps }) {
  return (
    <div
      className={clsx("section-footer flex justify-end", className)}
      {...restProps}
    >
      <span className="text-2xl md:text-3xl font-bold text-secondary-main/80">
        {text}
      </span>
    </div>
  );
}
