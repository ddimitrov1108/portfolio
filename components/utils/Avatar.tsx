import { cn } from "@/lib/utils";
import Image from "next/image";

const Avatar = ({
  src,
  alt,
  className,
  ...props
}: React.ComponentProps<typeof Image>) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn(
        "mx-auto rounded-full overflow-hidden border-2 border-background/20 bg-background w-[120px] sm:w-[140px]",
        className
      )}
      priority
      {...props}
    />
  );
};
export default Avatar;
