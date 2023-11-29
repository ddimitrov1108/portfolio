import Link from "next/link";

const GetInTouchButton = ({ ...restProps }) => {
  return (
    <Link
      href="/#get-in-touch"
      className="group relative duration-500 ease-in-out text-slate-100 font-[medium] rounded-xl bg-gradient-to-r from-active-blue to-active-red p-[1px]"
      {...restProps}
    >
      <div className="transition-all px-4 py-1.5 bg-bodyBg group-hover:bg-transparent rounded-xl overflow-hidden">
        Get In Touch
      </div>
    </Link>
  );
};
export default GetInTouchButton;
