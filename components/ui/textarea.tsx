import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-md border border-secondary-foreground/5 bg-secondary-foreground/5 px-3 py-2 text-sm !outline-none ring-offset-background placeholder-text-secondary-foreground transition-all ease-in-out duration-200 hover:enabled:ring-2 hover:enabled:ring-secondary-foreground/10 focus-visible:ring-2 focus-visible:!ring-secondary-foreground/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
export default Textarea;
