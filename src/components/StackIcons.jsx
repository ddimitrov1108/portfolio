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

export default function StackIcons() {
  return (
    <div
      id="stack-icons"
      className="rounded-full w-[420px] h-[420px] top-0 right-0 hidden lg:block absolute text-4xl"
    >
      <div className="absolute top-4 right-6 bg-secondary-light/[0.15] w-52 h-52 rounded-full"></div>
      <div className="absolute bottom-12 left-14 bg-secondary-light/[0.15] w-72 h-72 rounded-full"></div>
      <SiReact className="scale-xl absolute top-[18%] left-[20%] text-cyan-600" />
      <SiRedux className="scale-md absolute top-[12%] right-[16%] text-purple-900" />
      <SiTypescript className="scale-xs absolute top-[28%] right-[6%] text-blue-900" />
      <FaNodeJs className="scale-sm absolute top-[30%] left-[36%] text-green-900" />
      <SiTailwindcss className="scale-lg absolute top-[60%] left-[29%] text-cyan-400" />
      <TbCSharp className="scale-sm absolute top-[75%] left-[42%] text-purple-700" />
      <SiMysql className="scale-sm absolute top-[16%] left-[48%] text-primary-dark" />
      <SiJquery className="scale-xs absolute top-[65%] right-[30%] text-blue-500" />
      <SiMongodb className="scale-lg absolute top-[48%] right-[20%] text-green-600" />{" "}
      <SiJavascript className="scale-md absolute top-[74%] right-[11%] bg-black text-yellow-400" />
      <SiCss3 className="scale-xs absolute top-[42%] left-[23%] text-primary-light" />
      <SiBootstrap className="scale-xs absolute top-[32%] right-[30%] text-purple-500" />
      <SiHtml5 className="scale-sm absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-orange-600" />
    </div>
  );
}
