import { cn } from "@/lib/utils";
import { socialProviders } from "../constants";
import Link from "next/link";

const Socials = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex items-center gap-6 justify-center", className)}
      {...props}
    >
      {socialProviders.map(({ name, href, icon }) => (
        <Link
          key={name}
          href={href}
          title={name}
          aria-label={name}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors text-secondary-foreground hover:text-foreground"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};
export default Socials;
