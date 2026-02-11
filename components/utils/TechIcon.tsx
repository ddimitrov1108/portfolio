import { cn, getTechIconClasses, getTechIconSrc } from "@/lib/utils";

interface TechIconProps {
  tech: string;
  size?: number;
  className?: string;
}

const TechIcon = ({ tech, size = 24, className }: TechIconProps) => (
  <span
    className={cn("block select-none object-contain", getTechIconClasses(tech), className)}
    style={{ width: size, height: size }}
  >
    <img
      src={getTechIconSrc(tech)}
      alt={tech}
      width={size}
      height={size}
      className="size-full select-none object-contain"
    />
  </span>
);

export default TechIcon;
