"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TechIcon from "./utils/TechIcon";
import { IProject } from "@/lib/interfaces";
import {
  Code2,
  Construction,
  Github,
  Palette,
  SquareArrowOutUpRight,
} from "lucide-react";
import type { ProjectType } from "@/lib/interfaces";
import { fadeInScale } from "@/lib/animations";

const typeIcons: Record<ProjectType, React.ComponentType<{ size?: number }>> = {
  application: Code2,
  branding: Palette,
};

interface Props {
  data: IProject;
}

const Project = ({ data }: Props) => {
  const TypeIcon = typeIcons[data.type];
  return (
    <motion.div
      variants={fadeInScale(0.95)}
      initial="initial"
      animate="animate"
      className="flex h-full flex-col border p-4 md:p-6 rounded-lg group"
    >
      <div className="w-full rounded-lg relative overflow-hidden!">
        <div className="border overflow-hidden! rounded-lg">
          <Image
            src={`/projects/${data.img}.${data.imgFormat ?? "avif"}`}
            alt={data.name}
            width={1920}
            height={1080}
            className="max-w-full h-auto min-h-[160px] max-h-[160px] xs:min-h-[220px] xs:max-h-[220px] sm:min-h-[280px] sm:max-h-[280px] md:min-h-[320px] md:max-h-[320px] object-cover object-center rounded-md group-hover:scale-105! transition-all duration-300 "
            priority
            unoptimized={data.unoptimized}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 rounded-b-lg bg-background py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 capitalize p-1.5 px-2.5 rounded-full border text-foreground text-xs sm:text-sm max-w-fit">
              {TypeIcon && <TypeIcon size={16} />}
              {data.type}
            </span>
            {data.wip && (
              <span className="flex items-center gap-2 capitalize p-1.5 px-2.5 rounded-full border text-foreground text-xs sm:text-sm max-w-fit">
                <Construction size={16} /> WIP
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={data.source ?? "#"}
              className="transition-all text-muted-foreground hover:text-foreground"
              target={data.source ?? "_blank"}
              rel="noopener noreferrer"
              aria-label={data.name}
              title={`${data.name} - Source Code`}
            >
              <Github size={22} strokeWidth={1.5} />
            </Link>

            <Link
              href={data.url ?? "#"}
              className="transition-all text-muted-foreground hover:text-foreground"
              target={data.url ? "_blank" : ""}
              rel="noopener noreferrer"
              aria-label={data.name}
              title={`${data.name} - Live Demo`}
            >
              <SquareArrowOutUpRight size={22} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="font-medium">{data.name}</h1>

          <p className="text-sm text-muted-foreground">{data.description}</p>
        </div>

        <div className="flex items-center flex-wrap gap-4 !mt-4">
          {data.tech.map((tech) => (
            <TechIcon key={tech} tech={tech} size={24} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Project;
