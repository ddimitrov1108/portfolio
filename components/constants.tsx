import { Github, Linkedin, Send } from "lucide-react";

export const headerNavLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const socialProviders = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-dimitrov-94593a180/",
    icon: <Linkedin size={32} strokeWidth={1.5} />,
  },
  {
    name: "Github",
    href: "https://github.com/ddimitrov1108",
    icon: <Github size={32} strokeWidth={1.5} />,
  },
  {
    name: "Telegram",
    href: "https://t.me/@d_dimitrov",
    icon: <Send size={32} strokeWidth={1.5} />,
  },
];

export const techStackIcons = [
  "nextjs.svg",
  "react.svg",
  "redux.svg",
  "ts.svg",
  "js.svg",
  "tailwindcss.svg",
  "shadcnui.svg",
  "headlessui.svg",
  "scss.svg",
  "prisma.svg",
  "mysql.svg",
  "postgresql.svg",
  "html.svg",
  "css.svg",
];
