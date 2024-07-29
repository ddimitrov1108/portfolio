import { cn } from "@/lib/utils";

const Container = ({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section
      id="contact"
      className={cn("container grid space-y-16 py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
};
export default Container;
