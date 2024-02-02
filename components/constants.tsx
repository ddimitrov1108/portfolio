import { Github, Linkedin, Send } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export const headerNavLinks = [
  { id: uuidv4(), name: "Home", href: "#home" },
  { id: uuidv4(), name: "About Me", href: "#about-me" },
  { id: uuidv4(), name: "Projects", href: "#projects" },
  { id: uuidv4(), name: "Get In Touch", href: "#get-in-touch" },
];

export const socialNavLinks = [
  {
    id: uuidv4(),
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-dimitrov-94593a180/",
    icon: <Linkedin size={28} />,
  },
  {
    id: uuidv4(),
    name: "Github",
    href: "https://github.com/ddimitrov1108",
    icon: <Github size={28} />,
  },
  {
    id: uuidv4(),
    name: "Telegram",
    href: "https://t.me/@d_dimitrov",
    icon: <Send size={28} />,
  },
];

export const techStack = {
  "Front-End": [
    { id: uuidv4(), name: "Next.js", timestamp: "1", suffix: "year" },
    { id: uuidv4(), name: "React.js", timestamp: "3", suffix: "years" },
    { id: uuidv4(), name: "TypeScript", timestamp: "Half a", suffix: "year" },
    { id: uuidv4(), name: "TailwindCSS", timestamp: "3", suffix: "years" },
    { id: uuidv4(), name: "SCSS", timestamp: "3", suffix: "years" },
    { id: uuidv4(), name: "HTML5, CSS3, JS", timestamp: "5+", suffix: "years" },
  ],
  "Back-End": [
    { id: uuidv4(), name: "MySQL", timestamp: "2", suffix: "years" },
    { id: uuidv4(), name: "Express.js", timestamp: "1", suffix: "year" },
    { id: uuidv4(), name: "Node.js", timestamp: "1", suffix: "year" },
    { id: uuidv4(), name: "C#", timestamp: "1", suffix: "year" },
  ],
};

export const techStackIcons = [
  { id: uuidv4(), src: "nextjs.svg", className: "top-[18%] right-[20%]" },
  { id: uuidv4(), src: "react.svg", className: "top-[3%] left-[37.5%]" },
  {
    id: uuidv4(),
    src: "tailwindcss.svg",
    className: "top-[35%] left-[8.5%]",
  },
  {
    id: uuidv4(),
    src: "scss.svg",
    className: "top-[26%] left-[45%]",
  },
  {
    id: uuidv4(),
    src: "html.svg",
    className: "bottom-[6%] left-[54%]",
  },
  {
    id: uuidv4(),
    src: "css.svg",
    className: "bottom-[21%] left-[4%]",
  },
  {
    id: uuidv4(),
    src: "js.svg",
    className: "bottom-[21%] left-[32%]",
  },
  {
    id: uuidv4(),
    src: "mysql.svg",
    className: "bottom-[24%] right-[4%]",
  },
  {
    id: uuidv4(),
    src: "ts.svg",
    className: "bottom-[36%] right-[29%]",
  },
];

export const projects = [
  {
    id: uuidv4(),
    view: true,
    showLink: false,
    img: "task-doer.png",
    url: "https://github.com/ddimitrov1108/task-doer",
    type: "course work",
    name: "TaskDoer",
    description: `Application that will help you to manage your day to day and future activities. Help yourself and get productive!`,
    technologies: [
      { id: uuidv4(), src: "nextjs.svg" },
      { id: uuidv4(), src: "ts.svg" },
      {
        id: uuidv4(),
        src: "tailwindcss.svg",
      },
      { id: uuidv4(), src: "prisma.svg" },
      { id: uuidv4(), src: "mysql.svg" },
    ],
  },
  {
    id: uuidv4(),
    view: true,
    showLink: true,
    img: "sellstone.jpg",
    url: "https://sellstone.eu",
    type: "freelance",
    name: "Marketing Landing Page",
    description: `Freelance project to help a small company with their growth in the industry of Digital Marketing.`,
    technologies: [
      { id: uuidv4(), src: "react.svg" },
      {
        id: uuidv4(),
        src: "tailwindcss.svg",
      },
    ],
  },
  {
    id: uuidv4(),
    view: true,
    showLink: false,
    img: "tickets-burgas.jpg",
    url: "https://github.com/ddimitrov1108/tickets-burgas",
    type: "course work",
    name: "Public Transport Ticketing App",
    description: `Application that helps the public transport system by integrating web application for buying and verifying tickets using QR code.`,
    technologies: [
      { id: uuidv4(), src: "react.svg" },
      { id: uuidv4(), src: "redux.svg" },
      {
        id: uuidv4(),
        src: "tailwindcss.svg",
      },
      {
        id: uuidv4(),
        src: "csharp.svg",
      },
    ],
  },
  {
    id: uuidv4(),
    view: false,
    showLink: false,
    img: "saxo-trading.png",
    url: "#",
    type: "freelance",
    name: "Trading Platform",
    description: `
    Saxo Trading offers a user-friendly experience in financial markets, empowering investors with advanced tools, diverse asset classes, and personalized solutions to achieve their financial objectives.`,
    technologies: [
      { id: uuidv4(), src: "vue.svg" },
      {
        id: uuidv4(),
        src: "tailwindcss.svg",
      },
      {
        id: uuidv4(),
        src: "scss.svg",
      },
    ],
  },
];

export const contactDetails = [
  {
    id: uuidv4(),
    src: "location.webp",
    title: "Location",
    description: "Bulgaria, Burgas",
  },
  {
    id: uuidv4(),
    src: "email.webp",
    title: "Email Address",
    description: "ddimitrov1108@gmail.com",
  },
];
