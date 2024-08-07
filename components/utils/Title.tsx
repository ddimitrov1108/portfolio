"use client";

import { cn } from "@/lib/utils";
import { easeInOut, motion } from "framer-motion";

interface Props extends Omit<React.ComponentProps<typeof motion.div>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}

const titleAnimation = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1, easeInOut },
  },
};

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
      variants={titleAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("text-center grid gap-4", className)}
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
