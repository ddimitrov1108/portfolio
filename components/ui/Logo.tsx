import { Code2 } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Code2 className=" text-primary-main" />
      <h1 className="text-white font-semibold text-xl">Dimitrov.DEV</h1>
    </Link>
  );
};
export default Logo;
