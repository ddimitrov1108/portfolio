import clsx from "clsx";

const SectionHeader = ({
  ignoreResponsiveText = false,
  containerClassName,
  className,
  subtext,
  children,
}) => {
  return (
    <div className={containerClassName}>
      {subtext && (
        <h1 className="text-active-blue font-bold text-sm md:text-base uppercase">
          {subtext}
        </h1>
      )}

      <h1
        className={clsx(
          "font-bold",
          ignoreResponsiveText ? "text-lg" : "text-xl sm:text-2xl md:text-3xl",
          className
        )}
      >
        {children}
      </h1>
    </div>
  );
};
export default SectionHeader;
