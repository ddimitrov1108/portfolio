"use client";

import { Github } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import TechStackCarousel from "../TechStackCarousel";
import Avatar from "../utils/Avatar";
import Title from "../utils/Title";
import Container from "../utils/Container";
import ProjectCounter from "../utils/ProjectCounter";
import { socialProviders } from "../constants";
import { cn } from "@/lib/utils";

const gridColumnClassName = cn(
  "bg-secondary-foreground/5 rounded-md p-4 py-8",
  "sm:p-6 xl:p-10"
);

const fromRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.5, easeInOut },
  },
};

const fromLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.5, easeInOut },
  },
};

const AboutSection = () => {
  return (
    <Container id="about">
      <Title title="Get to know me" />

      <div className="grid !grid-cols-2 lg:!grid-cols-7 gap-y-4 lg:gap-x-4 text-secondary-foreground">
        <motion.div
          variants={fromLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={cn(
            "col-span-2 lg:col-span-5 order-2 lg:order-1",
            gridColumnClassName
          )}
        >
          <div className="grid space-y-4 text-sm xs:text-base">
            <p>Im Daniel,</p>

            <p>
              As a seasoned Front-End Developer I blend expertise in building
              robust web applications with a strong foundation in web
              technologies and UI/UX principles creating visually appealing and
              user-friendly interfaces.
            </p>

            <p>
              With a strong foundation in computer science and a keen eye on
              ui/ux design principles I bring a holistic approach to each
              project.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromRightVariants}
          className="grid items-center justify-center col-span-2 bg-transparent lg:bg-secondary-foreground/5 order-1 lg:order-2 rounded-md"
        >
          <Avatar
            src="/me/avatar.jpg"
            alt="avatar.jpg"
            width={500}
            height={500}
            className="w-[55%] xs:!w-[50%] lg:!w-[55%]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromLeftVariants}
          className={cn(
            "text-center grid items-center space-y-2 col-span-1 order-4 mr-2 lg:mr-0",
            gridColumnClassName
          )}
        >
          <ProjectCounter title="Freelance projects" count={2} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromLeftVariants}
          className={cn(
            "text-center grid items-center space-y-2 col-span-1 order-4 ml-2 lg:ml-0",
            gridColumnClassName
          )}
        >
          <ProjectCounter title="Completed projects" count={7} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromRightVariants}
          className={cn(
            "grid col-span-2 lg:col-span-5 order-6 lg:order-5 text-sm xs:text-base",
            gridColumnClassName
          )}
        >
          <p className="py-2">
            Front-End developer passionate about creating intuitive engaging and
            visually appealing web experiences. Eager to collaborate on
            challenging projects that push the boundaries of frontend
            technology. Experienced in building scalable, responsive, and
            accessible user interfaces. Adept at problem-solving and finding
            creative solutions to complex technical challenges.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromLeftVariants}
          className={cn(
            "grid items-center justify-center col-span-2 lg:col-span-1 order-5 lg:order-6",
            gridColumnClassName
          )}
        >
          <Link
            href={socialProviders[1].href}
            title={socialProviders[1].name}
            aria-label={socialProviders[1].name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              strokeWidth={1}
              className="text-secondary-foreground hover:text-foreground transition-all w-[64px] h-[64px] xs:w-[86px] xs:h-[86px]"
            />
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromRightVariants}
          className={cn(
            "space-y-6 col-span-2 lg:col-span-6 order-7",
            gridColumnClassName
          )}
        >
          <h1 className="text-foreground font-semibold text-center">
            My Tech Stack
          </h1>
          <TechStackCarousel />
        </motion.div>
      </div>
    </Container>
  );
};
export default AboutSection;
