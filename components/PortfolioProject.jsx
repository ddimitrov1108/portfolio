import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./ui/SectionHeader";
import { FiExternalLink } from "react-icons/fi";
import clsx from "clsx";
import SvgIcon from "./ui/SvgIcon";

export default function PortfolioProject({ project = null, domIndex = 0 }) {
  return (
    project != null && (
      <div className="w-full relative flex flex-col lg:flex-row even:lg:justify-end even:lg:text-left odd:lg:text-right">
        <div className="z-30 lg:shadow-xl overflow-hidden w-full h-full lg:max-w-[600px] max-h-[165px] xs:max-h-[192px] sm:max-h-[240px] md:max-h-[320px] rounded-2xl">
          <Link href={project?.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={`/${project?.img}`}
              alt={project?.img}
              priority
              width={1920}
              height={360}
              className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-[7000ms] ease-in-out"
            />
          </Link>
        </div>

        <div
          className={clsx(
            "lg:absolute flex flex-col gap-4 top-0 bottom-0 py-4 lg:p-0 lg:top-4 lg:w-[50%]",
            domIndex % 2 ? "lg:left-0" : "lg:right-0"
          )}
        >
          <SectionHeader className="pb-0 w-full relative z-30 lg:-z-10">
            {project?.type}
            <h4 className="capitalize font-bold text-black text-xl z-30">
              {project?.name}
            </h4>
          </SectionHeader>

          <p className="relative z-30 rounded-2xl lg:bg-white text-secondary lg:shadow-md lg:p-4 h-fit">
            {project?.description}
          </p>

          <div
            className={clsx(
              "relative z-30 w-full lg:w-fit flex flex-wrap gap-4",
              domIndex % 2 ? "lg:mr-auto" : "lg:ml-auto"
            )}
          >
            {project?.technologies.map(({ id, src }) => (
              <SvgIcon key={id} src={src} size={24} />
            ))}
          </div>

          <div
            className={clsx(
              "w-fit mt-2",
              domIndex % 2 ? "lg:mr-auto" : "lg:ml-auto"
            )}
          >
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