import clsx from "clsx";
import React from "react";

export default function SectionMain({ className, children, ...restProps }) {
  return (
    <div className={clsx("", className)} {...restProps}>
      {children}
    </div>
  );
}
