"use client";

import { easeInOut, motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "./constants";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Project from "./Project";

const tabsAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

const ProjectsTabs = () => {
  return (
    <Tabs defaultValue="all" className="space-y-16 overflow-x-hidden">
      <TabsList
        className="flex items-center justify-center gap-2 border rounded-lg w-full max-w-fit mx-auto p-2 py-6"
        asChild
      >
        <motion.div
          variants={tabsAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, easeInOut }}
        >
          <TabsTrigger value="all" className="capitalize px-4">
            All
          </TabsTrigger>
          {projects.tabs.map((tab) => (
            <TabsTrigger
              key={tab.type}
              value={tab.type}
              className="capitalize px-4"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </motion.div>
      </TabsList>

      <TabsContent value="all" tabIndex={-1}>
        <Carousel opts={{ align: "center" }}>
          <CarouselContent>
            {projects.data.map((project) => (
              <CarouselItem
                key={project.name}
                className="select-none min-h-fit basis-full lg:basis-2/4"
              >
                <Project data={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </TabsContent>

      {projects.tabs.map((tab) => (
        <TabsContent key={tab.type} value={tab.type} tabIndex={-1}>
          <Carousel opts={{ align: "center" }}>
            <CarouselContent>
              {projects.data
                .filter((project) => project.type === tab.type)
                .map((project) => (
                  <CarouselItem
                    key={project.name}
                    className="select-none min-h-fit basis-full lg:basis-2/4"
                  >
                    <Project data={project} />
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </TabsContent>
      ))}
    </Tabs>
  );
};
export default ProjectsTabs;
