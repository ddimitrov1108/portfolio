import clsx from "clsx";
import React from "react";

export default function SectionMain({ className, children, ...restProps }) {
  return (
    <div className={clsx("section-main w-full py-8", className)} {...restProps}>
      {children}
    </div>
  );
}
