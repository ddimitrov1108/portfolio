import { FiGithub } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { v4 as uuidv4 } from "uuid";

export const headerNavLinks = [
  { id: uuidv4(), name: "Home", href: "/#home" },
  { id: uuidv4(), name: "About me", href: "/#about-me" },
  { id: uuidv4(), name: "My work", href: "/#my-work" },
];

export const socialNavLinks = [
  { id: uuidv4(), name: "LinkedIn", href: "/", icon: <FaLinkedinIn /> },
  { id: uuidv4(), name: "Github", href: "#aboutme", icon: <FiGithub /> },
  { id: uuidv4(), name: "Telegram", href: "#mywork", icon: <LiaTelegram /> },
  {
    id: uuidv4(),
    name: "Instagram",
    href: "#getintouch",
    icon: <FaInstagram />,
  },
];

export const technologies = [
  { id: uuidv4(), name: "React.js", years: "3" },
  { id: uuidv4(), name: "TailwindCSS", years: "3" },
  { id: uuidv4(), name: "Next.js", years: "1" },
  { id: uuidv4(), name: "HTML, SCSS, JS", years: "5+" },
  { id: uuidv4(), name: "MySQL", years: "2" },
  { id: uuidv4(), name: "C++", years: "5+" },
  { id: uuidv4(), name: "Express.js", years: "1" },
  { id: uuidv4(), name: "Node.js", years: "1" },
  { id: uuidv4(), name: "C#", years: "1" },
];

export const technologiesIcons = [
  { id: uuidv4(), src: "nextjs.svg", className: "top-[16%] right-[20%]" },
  { id: uuidv4(), src: "react.svg", className: "top-[3%] left-[30%]" },
  {
    id: uuidv4(),
    src: "tailwindcss.svg",
    className: "top-[36%] left-[1%]",
  },
  {
    id: uuidv4(),
    src: "scss.svg",
    className: "top-[32%] left-[25%]",
  },
  {
    id: uuidv4(),
    src: "html.svg",
    className: "bottom-[6%] left-[50%]",
  },
  {
    id: uuidv4(),
    src: "css.svg",
    className: "bottom-[17%] left-[5%]",
  },
  {
    id: uuidv4(),
    src: "js.svg",
    className: "bottom-[28%] left-[32%]",
  },
  {
    id: uuidv4(),
    src: "mysql.svg",
    className: "top-[60%] right-[11%]",
  },
  {
    id: uuidv4(),
    src: "prisma.svg",
    className: "bottom-[50%] right-[33%]",
  },
];

export const projects = [
  {
    id: uuidv4(),
    view: true,
    img: "sellstone-screen.webp",
    url: "https://sellstone.eu/",
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
    img: "tickets-burgas-screen.webp",
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
    img: "saxo-trading-screen.webp",
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
