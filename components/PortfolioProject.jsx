import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./ui/SectionHeader";
import SvgIcon from "./ui/SvgIcon";
import { FiExternalLink } from "react-icons/fi";

export default function PortfolioProject({ project = null }) {
  return (
    project != null && (
      <div className="group w-full gap-y-2 relative flex flex-col lg:flex-row even:lg:justify-end even:lg:text-left odd:lg:text-right">
        <div className="z-30 overflow-hidden w-full h-full lg:max-w-[600px] max-h-[170px] xs:max-h-[200px] sm:max-h-[300px] md:max-h-[360px] lg:max-h-[310px] rounded-2xl p-2 border-white shadow-md lg:shadow-lg">
          <Link href={project?.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={`/${project?.img}`}
              alt={project?.img}
              priority
              width={1280}
              height={360}
              className="overflow-hidden rounded-2xl w-full h-full object-cover object-top hover:object-bottom transition-all duration-[5000ms] ease-in-out"
            />
          </Link>
        </div>

        <div className="lg:absolute flex flex-col gap-4 top-0 bottom-0 py-4 lg:p-0 lg:top-4 lg:w-[50%] group-odd:lg:right-0 group-even:lg:left-0">
          <SectionHeader className="pb-0 w-full relative z-30 lg:-z-10 text-sm">
            {project?.type}
            <h4 className="capitalize font-bold text-black text-xl z-30">
              {project?.name}
            </h4>
          </SectionHeader>

          <p className="relative z-30 rounded-2xl lg:bg-white text-secondary lg:shadow-md lg:p-4 h-fit">
            {project?.description}
          </p>

          <div className="relative z-30 w-full lg:w-fit flex flex-wrap gap-4 group-odd:lg:ml-auto group-even:lg:mr-auto">
            {project?.technologies.map(({ id, src }) => (
              <SvgIcon key={id} src={src} size={24} />
            ))}
          </div>

          <div className="w-fit mt-2 group-odd:lg:ml-auto group-even:lg:mr-auto">
            <Link
              href={project?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center max-w-fit text-primary"
            >
              <FiExternalLink className="text-2xl" />
              View
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
