import Link from "next/link";

export default function StyledLink({
  href = "/",
  text = "link",
  className,
  ...restProps
}) {
  return (
    <Link
      href={href}
      className="font-semibold relative group p-2"
      {...restProps}
    >
      <span className="transition-all duration-300 group-hover:text-primary ">
        {text}
      </span>
      <div className="absolute bottom-0 right-[50%] transition-all duration-300 w-0 group-hover:w-[20%] h-0.5 bg-primary rounded-l-full"></div>
      <div className="absolute bottom-0 left-[50%] transition-all duration-300 w-0 group-hover:w-[20%] h-0.5 bg-primary rounded-r-full"></div>
    </Link>
  );
}
