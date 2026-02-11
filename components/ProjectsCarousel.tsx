"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Project from "@/components/Project";
import { IProject } from "@/lib/interfaces";

const carouselOpts = {
  align: "center" as const,
  breakpoints: {
    "(min-width: 1024px)": { dragFree: true },
  },
};

interface ProjectsCarouselProps {
  projects: IProject[];
}

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => (
  <Carousel opts={carouselOpts}>
    <CarouselContent className="items-stretch">
      {projects.map((project) => (
        <CarouselItem
          key={project.name}
          className="select-none h-full basis-full lg:basis-2/4"
        >
          <Project data={project} />
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

export default ProjectsCarousel;
