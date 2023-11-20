import Image from "next/image";
import clsx from "clsx";

export default function SvgIcon({ src, size = 24, className, ...restProps }) {
  return (
    <div
      className={clsx(
        "grid items-center p-3 shadow-md rounded-full cursor-pointer bg-containerBg",
        className
      )}
      {...restProps}
    >
      <Image
        src={src}
        alt={src}
        width={size}
        height={size}
        className="transition-all object-fill w-[24px] h-[24px]"
      />
    </div>
  );
}
