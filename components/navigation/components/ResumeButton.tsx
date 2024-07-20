import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";
import Button from "@/components/ui/button";

const ResumeButton = () => {
  return (
    <Button variant="default" size="sm" asChild>
      <Link
        href="/me/cv.pdf"
        title="Resume"
        aria-label="Resume"
        target="_blank"
        download="CV-Daniel-Dimitrov"
        rel="noopener noreferrer"
      >
        <ArrowDownToLine size={18} />
        Download Resume
      </Link>
    </Button>
  );
};
export default ResumeButton;
