import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  href: string;
  className?: string;
  title?: string;
  "aria-label"?: string;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}

const StyledLink = ({ href, className, children, ...restProps }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative duration-500 ease-in-out text-light font-medium rounded-xl bg-gradient-to-r from-primary-main to-secondary-main p-[1px]",
        className
      )}
      {...restProps}
    >
      <div className="transition-all px-4 py-1.5 bg-bodyBg group-hover:bg-transparent rounded-xl overflow-hidden">
        {children}
      </div>
    </Link>
  );
};
export default StyledLink;
