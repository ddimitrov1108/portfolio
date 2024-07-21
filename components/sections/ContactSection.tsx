"use client";

import ContactForm from "../forms/ContactForm";
import Container from "../utils/Container";
import Title from "../utils/Title";
import { motion } from "framer-motion";

const circleVariants = {
  hidden: { width: 0, height: 0, opacity: 0 },
  visible: {
    width: "30%",
    height: "30%",
    opacity: 1,
    transition: { duration: 1, delay: 0.8 },
  },
};

const ContactSection = () => {
  return (
    <Container id="contact" className="bg-grid min-h-screen items-center pb-44">
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="circle-glow !backdrop-blur-2xl mt-12"
      />

      <div className="grid items-center justify-center z-10 space-y-16">
        <Title
          title="Contact me"
          description="Dont hesitate to let me hear from you!"
        />
        <ContactForm />
      </div>
    </Container>
  );
};
export default ContactSection;
