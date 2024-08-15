"use client";

import Link from "next/link";
import { Dot } from "lucide-react";
import { motion } from "framer-motion";
import Socials from "../utils/Socials";
import Avatar from "../utils/Avatar";
import Section from "../utils/Section";
import Title from "../utils/Title";

const avatarVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const headerAnimation = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 },
  },
};

const circleAnimation = {
  hidden: { width: 0, height: 0, opacity: 0 },
  visible: {
    width: "20%",
    height: "20%",
    opacity: 1,
    transition: { duration: 1, delay: 0.6 },
  },
};

const textAnimation = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 },
  },
};

const iconsAnimation = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 },
  },
};

const dotAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1 },
  },
};

const HomeSection = () => {
  return (
    <Section id="#" className="bg-grid min-h-screen items-center">
      <motion.div
        variants={circleAnimation}
        initial="hidden"
        animate="visible"
        className="circle-glow !backdrop-blur-2xl"
      />

      <div className="text-center grid gap-10 z-10">
        <motion.div variants={avatarVariant} initial="hidden" animate="visible">
          <Avatar
            src="/me/avatar.jpg"
            alt="avatar.jpg"
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          className="grid gap-8"
          variants={headerAnimation}
          initial="hidden"
          animate="visible"
        >
          <Title
            titleClassName="text-lg xxs:text-[20px] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center !leading-tight"
            title={
              <>
                Turning Your Vision into Reality,
                <br /> The Front-End Odyssey
              </>
            }
          />

          <motion.div variants={textAnimation}>
            <p className="mx-auto max-w-md text-muted-foreground text-sm xs:text-base">
              A software engineer from Bulgaria, with a high level of
              enthusiasm, makes web experiences with technology
              that are user-centered and new.
            </p>
          </motion.div>

          <motion.div variants={iconsAnimation}>
            <Socials />
          </motion.div>

          <motion.div
            variants={dotAnimation}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/#about"
              title="About Me"
              className="transition-all absolute bottom-6 left-1/2 -translate-x-1/2 mx-auto max-w-fit border py-2 px-0 rounded-full text-muted-foreground border-secondary-foreground hover:border-foreground hover:text-foreground"
            >
              <Dot className="animate-bounce" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default HomeSection;
