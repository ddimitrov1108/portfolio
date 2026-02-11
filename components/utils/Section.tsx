import { cn } from "@/lib/utils";

const Section = ({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) => (
  <section
    className={cn("container grid space-y-16 py-24", className)}
    {...props}
  >
    {children}
  </section>
);
export default Section;
