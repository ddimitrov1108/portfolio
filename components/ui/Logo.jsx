import Link from "next/link";
import { FaCode } from "react-icons/fa6";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <FaCode className="text-2xl text-active-blue" />
      <h1 className="text-white font-semibold text-xl">Dimitrov.DEV</h1>
    </Link>
  );
};
export default Logo;
