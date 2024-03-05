import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MoveRight } from "lucide-react";
import HeaderText from "./ui/HeaderText";
import SvgIcon from "./ui/SvgIcon";

interface Props {
  project: {
    id: string;
    img: string;
    url: string | null;
    source: string | null;
    type: string;
    name: string;
    description: string;
    technologies: {
      id: string;
      src: string;
    }[];
  };
}

const Project = ({ project }: Props) => {
  return (
    <div className="group flex items-center gap-y-8 gap-x-12 lg:gap-x-16 flex-col lg:flex-row lg:even:flex-row-reverse">
      <div className="z-30 w-full max-h-[127px] xxs:max-h-[154px] xs:max-h-[178px] xsm:max-h-[210px] sm:max-h-[260px] md:max-h-[300px] lg:max-h-[200px] xl:max-h-[280px] rounded-lg overflow-hidden bg-transparent border-4 border-containerBg">
        <Image
          src={`/projects/${project.img}`}
          alt={project.img}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100vw", height: "auto" }}
          className="object-cover transition-all duration-500 ease-in-out hover:scale-110 overflow-hidden max-h-[127px] xxs:max-h-[154px] xs:max-h-[178px] xsm:max-h-[210px] sm:max-h-[260px] md:max-h-[300px] lg:max-h-[200px] xl:max-h-[280px]"
        />
      </div>

      <div className="w-full grid gap-4">
        <HeaderText
          subText={project.type}
          containerClassName="max-w-fit"
          className="flex items-center gap-2 w-fit"
        >
          {project.name}
        </HeaderText>

        {project.url && (
          <div className="flex items-center gap-3">
            <Link
              href={project.url}
              className="max-w-[240px] xxs:max-w-[280px] xs:max-w-[320px] xsm:max-w-none truncate ... text-primary-main font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.url}
            </Link>
            <ExternalLink size={18} className="text-primary-main" />
          </div>
        )}

        <p>{project.description}</p>

        <div className="flex items-center flex-wrap gap-1">
          {project.technologies.map(({ id, src }) => (
            <SvgIcon
              key={id}
              src={`/tech/${src}`}
              className="rounded-lg bg-bodyBg hover:bg-containerBg"
            />
          ))}
        </div>

        {project.source && (
          <Link
            href={project.source}
            className="text-sm flex items-center gap-2 bg-primary-main rounded-lg w-fit px-4 py-2 text-white font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <MoveRight size={18} className="text-white" />
          </Link>
        )}
      </div>
    </div>
  );
};
export default Project;
