import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const socialLinks = [
  { href: "https://github.com/ddimitrov1108", icon: <FiGithub /> },
  { href: "https://www.instagram.com/_dimitrovd/", icon: <FiInstagram /> },
  {
    href: "https://www.linkedin.com/in/daniel-dimitrov-94593a180/",
    icon: <FiLinkedin />,
  },
];

export default function SocialLinks() {
  return (
    <div className="social-links hidden xl:fixed bottom-0 left-0 px-8 xl:px-12 xl:flex flex-col gap-6 items-center text-xl">
      {socialLinks.map((link) => (
        <a
          href={link.href}
          target="_blank"
          key={link.href}
          className="cursor-pointer hover:text-primary-main"
        >
          {link.icon}
        </a>
      ))}
      <div className="fade-in-line mx-auto w-0.5 h-40 bg-primary-main"></div>
    </div>
  );
}
