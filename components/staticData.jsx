import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

export const socials = [
  {
    id: uuidv4(),
    ariaLabel: "Linkedin",
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/daniel-dimitrov-94593a180/",
  },
  {
    id: uuidv4(),
    ariaLabel: "GitHub",
    icon: <FiGithub />,
    href: "https://github.com/ddimitrov1108",
  },
  {
    id: uuidv4(),
    ariaLabel: "Instagram",
    icon: <FiInstagram />,
    href: "https://www.instagram.com/ddimit7r0v/",
  },
];

export const techStack = [
  { id: uuidv4(), src: "nextjs.svg" },
  { id: uuidv4(), src: "react.svg" },
  { id: uuidv4(), src: "redux.svg" },
  {
    id: uuidv4(),
    src: "tailwindcss.svg",
  },
  {
    id: uuidv4(),
    src: "mui.svg",
  },
  {
    id: uuidv4(),
    src: "sass.svg",
  },
  {
    id: uuidv4(),
    src: "html.svg",
  },
  {
    id: uuidv4(),
    src: "css.svg",
  },
  {
    id: uuidv4(),
    src: "js.svg",
  },
];

export const portfolioProjects = [
  {
    id: uuidv4(),
    img: "sellstone-screen.webp",
    url: "https://sellstone.eu/",
    type: "featured project",
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
    img: "tickets-burgas-screen.webp",
    url: "https://github.com/ddimitrov1108/tickets-burgas",
    type: "Course Work",
    name: "Public Transport Ticketing App",
    description: `Application that helps the public transport system by integrating web application for buying and verifying tickets using QR code.`,
    technologies: [
      { id: uuidv4(), src: "react.svg" },
      {
        id: uuidv4(),
        src: "tailwindcss.svg",
      },
      {
        id: uuidv4(),
        src: "sass.svg",
      },
      {
        id: uuidv4(),
        src: "csharp.svg",
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
