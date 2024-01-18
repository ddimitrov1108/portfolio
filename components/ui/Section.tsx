import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

const Section = ({ id, className, children }: Props) => {
  return (
    <div id={id} className={cn("container py-24", className)}>
      {children}
    </div>
  );
};
export default Section;
