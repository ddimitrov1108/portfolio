import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import HeaderText from "./ui/HeaderText";
import SvgIcon from "./ui/SvgIcon";

interface Props {
  project: {
    id: string;
    view: boolean;
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
    <div className="max-w-5xl group w-full gap-y-2 relative flex flex-col lg:flex-row even:lg:justify-end even:lg:text-left odd:lg:text-right odd:lg:ml-auto even:lg:mr-auto odd:xl:mr-24 even:xl:ml-24">
      <div className="z-30 overflow-hidden rounded-xl w-full lg:w-[640px] h-[160px] xs:h-[180px] sm:h-[260px] md:h-[300px] lg:h-[310px] border-8 border-containerBg bg-containerBg">
        <Image
          src={`/projects/${project.img}`}
          alt={project.img}
          priority
          width={1920}
          height={1080}
          className="overflow-hidden rounded-xl"
        />
      </div>

      <div className="lg:absolute flex flex-col gap-4 top-0 bottom-0 py-4 lg:p-0 lg:w-[50%] group-odd:lg:right-0 group-even:lg:left-0">
        {project.view ? (
          <Link href={project.url} target="_blank" rel="noopener noreferrer">
            <HeaderText
              subText={project.type}
              containerClassName="max-w-fit group-odd:lg:ml-auto group-even:lg:mr-auto"
              className="flex items-center gap-2 w-fit"
              ignoreResponsiveText
            >
              <LinkIcon size={20} className="text-primary-main" />{" "}
              {project.name}
            </HeaderText>
          </Link>
        ) : (
          <HeaderText
            subText={project.type}
            containerClassName="max-w-fit group-odd:lg:ml-auto group-even:lg:mr-auto"
            className="flex items-center gap-2 w-fit"
            ignoreResponsiveText
          >
            <LinkIcon size={20} className="text-primary-main" /> {project.name}
          </HeaderText>
        )}

        <div className="z-30 rounded-xl overflow-hidden lg:bg-gradient-to-r lg:from-primary-main lg:to-secondary-main lg:p-[1px]">
          <p className="relative z-30 rounded-xl bg-transparent lg:bg-containerBg text-gray-400 lg:p-6 h-fit text-left">
            {project.description}
          </p>
        </div>

        <div className="relative z-30 w-full lg:w-fit flex flex-wrap gap-4 group-odd:lg:ml-auto group-even:lg:mr-auto">
          {project.technologies.map(({ id, src }) => (
            <SvgIcon key={id} src={`/tech/${src}`} className="bg-containerBg" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Project;
