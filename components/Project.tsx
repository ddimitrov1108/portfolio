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
      <div className="z-30 w-full rounded-lg overflow-hidden bg-transparent border-4 border-containerBg">
        <Image
          src={`/projects/${project.img}`}
          alt={project.img}
          width={1920}
          height={1080}
          className="object-cover transition-all duration-500 min-h-[160px] lg:min-h-[260px] lg:max-h-[260px] xl:min-h-[300px] max-h-[300px] ease-in-out hover:scale-110 overflow-hidden"
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
