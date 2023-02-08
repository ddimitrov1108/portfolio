import clsx from "clsx";

export default function SectionHeader({
  number = 0,
  text = "",
  className,
  ...restProps
}) {
  const formatNumber = `${number >= 1 && number <= 9 ? `0${number}` : number}.`;

  return (
    <div className={clsx("section-header", className)} {...restProps}>
      <span className="text-lg text-code text-primary-main">
        {`${formatNumber} `}
      </span>
      <span className="text-2xl font-bold text-black/80">
        {text}
      </span>
    </div>
  );
}
