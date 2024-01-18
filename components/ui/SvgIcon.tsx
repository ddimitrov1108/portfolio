import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  size?: number;
  className?: string;
}

const SvgIcon = ({ src, size = 24, className }: Props) => {
  return (
    <div
      className={cn(
        "grid items-center p-2 shadow-md rounded-full",
        className
      )}
    >
      <Image
        src={src}
        alt={src}
        width={size}
        height={size}
        className="transition-all object-fill"
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};
export default SvgIcon;
