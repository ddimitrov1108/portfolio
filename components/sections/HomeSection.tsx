"use client";

import Link from "next/link";
import { Dot } from "lucide-react";
import { motion } from "framer-motion";
import Socials from "../utils/Socials";
import Avatar from "../utils/Avatar";
import Container from "../utils/Container";

const avatarVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 },
  },
};

const circleVariants = {
  hidden: { width: 0, height: 0, opacity: 0 },
  visible: {
    width: "20%",
    height: "20%",
    opacity: 1,
    transition: { duration: 1, delay: 0.8 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 },
  },
};

const iconsVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.5 },
  },
};

const dotVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, delay: 1 },
  },
};

const HomeSection = () => {
  return (
    <Container id="#" className="bg-grid min-h-screen items-center">
      <motion.div
        variants={circleVariants}
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
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-white text-lg xxs:text-[20px] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-snug">
            Turning Your Vision into Reality,
            <br /> The FrontEnd Odyssey
          </h1>

          <motion.div variants={textVariants}>
            <p className="mx-auto max-w-md text-secondary-foreground text-sm xs:text-base">
              A passionate software engineer from Bulgaria crafting cutting-edge
              user-centric web experiences that push front-end boundaries.
            </p>
          </motion.div>

          <motion.div variants={iconsVariants}>
            <Socials />
          </motion.div>

          <motion.div variants={dotVariants} initial="hidden" animate="visible">
            <Link
              href="/#about"
              title="About Me"
              className="transition-all absolute bottom-6 left-1/2 -translate-x-1/2 mx-auto max-w-fit border py-2 px-0 rounded-full text-secondary-foreground border-secondary-foreground hover:border-foreground hover:text-foreground"
            >
              <Dot className="animate-bounce" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default HomeSection;
