"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "./constants";
import ProjectsCarousel from "./ProjectsCarousel";
import { fadeInScale } from "@/lib/animations";

const ProjectsTabs = () => (
  <Tabs defaultValue="all" className="space-y-16 overflow-x-hidden">
    <TabsList
      className="flex items-center justify-center gap-2 border rounded-lg w-full max-w-fit mx-auto p-2 py-6"
      asChild
    >
      <motion.div
        variants={fadeInScale(0.9)}
        initial="initial"
        animate="animate"
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
      <ProjectsCarousel projects={projects.data} />
    </TabsContent>

    {projects.tabs.map((tab) => (
      <TabsContent key={tab.type} value={tab.type} tabIndex={-1}>
        <ProjectsCarousel
          projects={projects.data.filter((project) => project.type === tab.type)}
        />
      </TabsContent>
    ))}
  </Tabs>
);
export default ProjectsTabs;
