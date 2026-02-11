"use client";

import { Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import TechStackCarousel from "../TechStackCarousel";
import Avatar from "../utils/Avatar";
import Title from "../utils/Title";
import Section from "../utils/Section";
import Counter from "../utils/Counter";
import { gridCardClassName, socialProviders } from "../constants";
import { cn } from "@/lib/utils";
import { fadeInFromLeft, fadeInFromRight } from "@/lib/animations";

const AboutSection = () => {
  return (
    <Section id="about">
      <Title title="Get to know me" />

      <div className="grid !grid-cols-2 lg:!grid-cols-9 gap-y-4 lg:gap-x-4 text-foreground">
        <motion.div
          variants={fadeInFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={cn(
            "col-span-2 lg:col-span-7 order-2 lg:order-1",
            gridCardClassName
          )}
        >
          <div className="space-y-4 text-sm xs:text-base">
            <p>Im Daniel,</p>

            <p>
              Being a skille­d front-end develope­r, I use what I know about
              creating solid web apps. I form inte­rfaces that are pleasing to
              the­ eye and simple to use­. I do this by utilizing web
              technologies and UI UX rule­s.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromRight}
          className="grid items-center justify-center col-span-2 bg-transparent lg:min-h-[200px] xl:min-h-[208px] lg:bg-secondary/50 order-1 lg:order-2 rounded-lg"
        >
          <Avatar
            src="/me/avatar.jpg"
            alt="avatar.jpg"
            width={500}
            height={500}
            className="w-[50%] sm:!w-[40%] lg:!w-[70%] mb-8 lg:mb-0"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromLeft}
          className={cn(
            "text-center grid items-center space-y-2 col-span-1 lg:col-span-2 order-4 mr-2 lg:mr-0",
            gridCardClassName
          )}
        >
          <Counter
            title={
              <>
                Freelance
                <br />
                Projects
              </>
            }
            count={6}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromLeft}
          className={cn(
            "text-center grid items-center col-span-1 lg:col-span-2 order-4 ml-2 lg:ml-0",
            gridCardClassName
          )}
        >
          <Counter
            title={
              <>
                Completed
                <br />
                Projects
              </>
            }
            count={11}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromRight}
          className={cn(
            "grid  space-y-2 col-span-2 lg:col-span-5 order-6 lg:order-5 text-sm xs:text-base",
            gridCardClassName
          )}
        >
          <p>
            {`As a web developer, I create websites that are easy to understand,
            interact with, and are usable. I make sure that every website I
            create is timeless by improving people's satisfaction while adapting
            to new things.`}
          </p>
          <p>
            {`I ensure interactive websites which favor a site. By making use of
            these two approaches together, I will consider everyone's needs.`}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromLeft}
          className={cn(
            "min-h-[168px] sm:min-h-[152px] lg:min-h-[200px] xl:min-h-[208px] grid items-center justify-center col-span-2 lg:col-span-2 order-5 lg:order-6",
            gridCardClassName
          )}
        >
          <Link
            href={socialProviders[1].href}
            title={socialProviders[1].name}
            aria-label={socialProviders[1].name}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <Github
              strokeWidth={1.1}
              className="text-foreground transition-all w-[64px] h-[64px]"
            />
            <span className="text-center text-muted-foreground hover:text-foreground transition-all text-base xl:text-lg font-medium">
              More on<br/>Github
            </span>
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromRight}
          className={cn(
            "overflow-x-hidden space-y-8 col-span-2 lg:col-span-7 order-7",
            gridCardClassName
          )}
        >
          <h1 className="text-center text-muted-foreground text-base xl:text-lg font-medium!">
            My Tech Stack
          </h1>
          <TechStackCarousel />
        </motion.div>
      </div>
    </Section>
  );
};
export default AboutSection;
