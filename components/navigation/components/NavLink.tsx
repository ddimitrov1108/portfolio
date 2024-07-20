import Link from "next/link";
import { cn } from "@/lib/utils";

const NavLink = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      className={cn(
        "capitalize text-center transition-all text-secondary-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
export default NavLink;
