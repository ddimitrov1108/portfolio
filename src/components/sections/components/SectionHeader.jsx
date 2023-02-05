import clsx from "clsx";

export default function SectionHeader({
  number = 0,
  text = "",
  className,
  ...restProps
}) {
  const formatNumber = `${
    number >= 1 && number <= 9 ? `0${number}` : number
  }. `;

  return (
    <div
      className={clsx("section-header mb-4 flex items-center gap-4 lg:max-w-lg", className)}
      {...restProps}
    >
      <div>
        <span className="text-lg text-code text-primary-main">{formatNumber}</span>
        <span className="text-xl md:text-2xl font-bold">{text}</span>
      </div>

      <div className="hidden xs:block grow h-[1px] bg-primary-main/60"></div>
    </div>
  );
}
