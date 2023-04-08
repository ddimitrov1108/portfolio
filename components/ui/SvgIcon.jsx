import clsx from "clsx";
import Image from "next/image";

export default function SvgIcon({ src, size = 32, className, ...restProps }) {
  const sizeClasses = `w-[${size}px] h-[${size}px]`;

  return (
    <div
      className={clsx(
        "grid items-center p-4 bg-white shadow-md rounded-full cursor-pointer",
        className
      )}
      {...restProps}
    >
      <Image
        src={`/${src}`}
        alt={src}
        width={size}
        height={size}
        className={sizeClasses}
      />
    </div>
  );
}
