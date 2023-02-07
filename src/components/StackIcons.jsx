import { FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiTypescript,
} from "react-icons/si";
import { TbCSharp } from "react-icons/tb";
import clsx from "clsx";

export default function StackIcons({ className, ...restProps }) {
  return (
    <div
      id="stack-icons"
      className={clsx(
        "relative -ml-[15%] lg:-ml-0 grow md:w-72 h-72 lg:-top-20 lg:h-96 text-4xl",
        className
      )}
    >
      <SiReact className="scale-lg absolute top-[18%] left-[20%] text-cyan-600" />
      <SiRedux className="scale-md absolute top-[12%] right-[21%] text-purple-900" />
      <SiTypescript className="scale-xs absolute top-[28%] right-[6%] text-blue-900" />
      <FaNodeJs className="scale-sm absolute top-[30%] left-[36%] text-green-900" />
      <SiTailwindcss className="scale-lg absolute top-[60%] left-[29%] text-cyan-400" />
      <TbCSharp className="scale-sm absolute top-[75%] left-[42%] text-purple-700" />
      <SiMysql className="scale-sm absolute top-[16%] left-[48%] text-primary-dark" />
      <SiJquery className="scale-xs absolute top-[65%] right-[30%] text-blue-500" />
      <SiMongodb className="scale-lg absolute top-[48%] right-[20%] text-green-600" />{" "}
      <SiJavascript className="scale-sm absolute top-[50%] left-[50%] bg-black text-yellow-400" />
      <SiCss3 className="scale-xs absolute top-[42%] left-[23%] text-primary-light" />
      <SiBootstrap className="scale-xs absolute top-[32%] right-[30%] text-purple-500" />
    </div>
  );
}
