import Image from "next/image";
import clsx from "clsx";

export default function SvgIcon({ src, size = 32, className, ...restProps }) {
  return (
    <div
      className={clsx(
        "group grid items-center p-4 bg-white shadow-md rounded-full cursor-pointer",
        className
      )}
      {...restProps}
    >
      <Image
        src={`/${src}`}
        alt={src}
        width={size}
        height={size}
        className="group-hover:scale-110 transition-all object-fill w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
      />
    </div>
  );
}
