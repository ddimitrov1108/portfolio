import { cn } from "@/lib/utils";

const Container = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      id="contact"
      className={cn("container grid space-y-16 py-24", className)}
      {...props}
    >
      {children}
    </div>
  );
};
export default Container;
