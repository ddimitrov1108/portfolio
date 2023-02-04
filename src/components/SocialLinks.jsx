import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  { href: "https://github.com/ddimitrov1108", icon: <FiGithub /> },
  { href: "https://www.instagram.com/_dimitrovd/", icon: <FiInstagram /> },
  {
    href: "https://www.linkedin.com/in/daniel-dimitrov-94593a180/",
    icon: <FiLinkedin />,
  },
  { href: "mailto:ddimitrov1108@gmail.com", icon: <FiMail /> },
];

export default function SocialLinks() {
  return (
    <div className="social-links hidden lg:fixed bottom-0 left-0 px-7 xl:px-14 lg:flex flex-col gap-6 items-center text-xl">
      {socialLinks.map((link) => (
        <a
          href={link.href}
          target="_blank"
          key={link.href}
          className="fade-in-link cursor-pointer hover:text-primary-main transition-all"
        >
          {link.icon}
        </a>
      ))}
      <div className="fade-in-line mx-auto w-0.5 h-40 bg-primary-main"></div>
    </div>
  );
}
