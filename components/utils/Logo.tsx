import Link from "next/link";
import { Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Logo = ({ className, ...props }: React.ComponentProps<typeof Link>) => {
  return (
    <Link className={cn("min-w-fit max-w-fit flex items-center gap-3", className)} {...props}>
      <Code2 className="text-[#5082ef]" />
      <h1 className="font-semibold text-xl">Dimitrov.DEV</h1>
    </Link>
  );
};
export default Logo;
