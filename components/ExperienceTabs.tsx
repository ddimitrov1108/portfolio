"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { techStack } from "./constants";

const ExperienceTabs = () => {
  let [categories] = useState(techStack);

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-bodyBg">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                cn(
                  "w-full md:w-fit rounded-xl text-sm py-2 px-2 md:px-4 font-medium leading-5 outline-none select-none",
                  selected
                    ? "bg-primary-main/20 text-light"
                    : "text-main hover:text-light"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          {Object.values(categories).map((technologies, index) => (
            <Tab.Panel
              key={index}
              className="sm:px-2 rounded-xl outline-none select-none"
            >
              {technologies.map(({ id, name, timestamp, suffix }) => (
                <div key={id} className="font-medium">
                  <span>{timestamp} </span>
                  <span className="font-normal">{suffix} of using </span>
                  <span className="text-primary-main">{name}</span>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
export default ExperienceTabs;
