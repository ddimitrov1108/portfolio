"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUpDelayed } from "@/lib/animations";

interface Props extends Omit<React.ComponentProps<typeof motion.div>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}

const Title = ({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  ...props
}: Props) => {
  return (
    <motion.div
      variants={fadeInUpDelayed(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("text-center space-y-2", className)}
      {...props}
    >
      <h1
        className={cn(
          "text-foreground text-3xl md:text-4xl lg:text-5xl font-bold text-center",
          titleClassName
        )}
      >
        {title}
      </h1>

      {description ? (
        <p
          className={cn(
            "text-base xs:text-lg text-muted-foreground font-medium",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};
export default Title;
