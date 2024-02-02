import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  ignoreResponsiveText?: boolean;
  containerClassName?: string;
  className?: string;
  children: ReactNode;
  subText?: string;
}

const HeaderText = ({
  ignoreResponsiveText = false,
  containerClassName,
  className,
  subText,
  children,
}: Props) => {
  return (
    <div className={containerClassName}>
      {subText && (
        <h1 className="text-primary-main font-bold text-sm md:text-base uppercase">
          {subText}
        </h1>
      )}

      <h1
        className={cn(
          "text-light font-bold",
          ignoreResponsiveText ? "text-lg" : "text-xl xs:text-2xl lg:text-3xl",
          className
        )}
      >
        {children}
      </h1>
    </div>
  );
};
export default HeaderText;
