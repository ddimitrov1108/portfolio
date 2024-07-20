import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "transition-all ease-in-out duration-200 flex h-12 w-full rounded-md bg-background px-4 py-2 text-sm ring-offset-background border border-secondary-foreground/10 placeholder:text-muted-foreground hover:enabled:ring-2 hover:enabled:ring-secondary-foreground/10 !outline-none focus-visible:ring-2 focus-visible:!ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
