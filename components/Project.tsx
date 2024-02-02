import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MoveRight } from "lucide-react";
import HeaderText from "./ui/HeaderText";
import SvgIcon from "./ui/SvgIcon";

interface Props {
  project: {
    id: string;
    view: boolean;
    showLink: boolean;
    img: string;
    url: string;
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
    <div className="group flex items-center gap-y-8 gap-x-12 lg:gap-x-16 flex-col md:flex-row md:even:flex-row-reverse">
      <div className="z-30 w-full max-w-[700px] max-h-[240px] md:max-h-[320px] rounded-lg overflow-hidden bg-transparent border-4 border-containerBg">
        <Image
          src={`/projects/${project.img}`}
          alt={project.img}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="transition-all duration-300 ease-in-out hover:scale-110 overflow-hidden max-h-[240px] md:max-h-[320px]"
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

        {project.showLink ? (
          <div className="flex items-center gap-3">
            <Link
              href={project.url}
              className="text-xl text-primary-main font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.url}
            </Link>
            <ExternalLink size={20} className="text-primary-main" />
          </div>
        ) : null}

        <p className="">{project.description}</p>

        <div className="flex items-center flex-wrap gap-1">
          {project.technologies.map(({ id, src }) => (
            <SvgIcon
              key={id}
              src={`/tech/${src}`}
              className="rounded-lg bg-bodyBg hover:bg-containerBg"
            />
          ))}
        </div>

        {project.view && project.url ? (
          <Link
            href={project.url}
            className="flex items-center gap-2 bg-primary-main rounded-lg w-fit px-4 py-2  text-white font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <MoveRight size={20} className="text-white" />
          </Link>
        ) : null}
      </div>
    </div>
  );
};
export default Project;
