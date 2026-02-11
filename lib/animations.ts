import type { Variants } from "framer-motion";

const easeInOut = "easeInOut" as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeInOut },
  },
};

export const fadeInUpDelayed = (delay = 0.1): Variants => ({
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: easeInOut },
  },
});

export const fadeInFromLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.5, ease: easeInOut },
  },
};

export const fadeInFromRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.5, ease: easeInOut },
  },
};

export const fadeInScale = (initialScale = 0.95): Variants => ({
  initial: { opacity: 0, scale: initialScale },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeInOut },
  },
});

export const circleGlow = (size = "20%", delay = 0.6): Variants => ({
  hidden: { width: 0, height: 0, opacity: 0 },
  visible: {
    width: size,
    height: size,
    opacity: 1,
    transition: { duration: 1, delay },
  },
});

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1 },
  },
};
