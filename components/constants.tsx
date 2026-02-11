import { cn } from "@/lib/utils";
import { IProject, ProjectType } from "@/lib/interfaces";
import { Github, Linkedin, Send } from "lucide-react";

export const gridCardClassName = cn(
  "bg-secondary/60 dark:bg-secondary/40 rounded-lg p-4 py-8",
  "sm:p-6 xl:p-10"
);

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
  "nextjs",
  "react",
  "redux",
  "ts",
  "js",
  "tailwindcss",
  "shadcnui",
  "headlessui",
  "scss",
  "prisma",
  "mysql",
  "postgresql",
  "supabase",
];

export const projects: {
  types: ProjectType[];
  tabs: {
    name: string;
    type: ProjectType;
  }[];
  data: IProject[];
} = {
  types: ["application", "branding"],
  tabs: [
    {
      name: "Applications",
      type: "application",
    },
    {
      name: "Branding",
      type: "branding",
    },
  ],
  data: [
    {
      img: "bunnyclaim",
      url: "https://www.bunnyclaim.com/",
      source: undefined,
      type: "application",
      wip: true,
      name: "BunnyClaim",
      description: "Earn crypto through faucet claims, PTC ads, and surveys.",
      tech: [
        "nextjs",
        "ts",
        "supabase",
        "postgresql",
        "tailwindcss",
        "shadcnui",
        "ccpayment",
      ],
    },
    {
      img: "linkhub",
      url: undefined,
      source: undefined,
      type: "application",
      wip: true,
      name: "Linkhub",
      description: "Link-in-bio solution to be used in social platforms.",
      tech: [
        "nextjs",
        "ts",
        "clerk",
        "mysql",
        "tailwindcss",
        "shadcnui",
        "stripe",
      ],
    },
    {
      img: "hair-products",
      url: "https://hair-products-itm9.onrender.com/",
      source: "https://github.com/ddimitrov1108/hair-products",
      type: "branding",
      name: "Hair Products Quiz",
      description: "Discover ideal hair products based on your needs.",
      tech: ["react", "ts", "tailwindcss"],
    },
    {
      img: "taskdoer",
      url: undefined,
      source: "https://github.com/ddimitrov1108/task-doer",
      type: "application",
      wip: false,
      name: "TaskDoer",
      description: "Efficiently manage and prioritize tasks.",
      tech: [
        "nextjs",
        "ts",
        "tailwindcss",
        "prisma",
        "mysql",
      ],
    },
    {
      img: "sellstone",
      url: "https://sellstone.vercel.app",
      source: "https://github.com/ddimitrov1108/sellstone",
      type: "branding",
      wip: false,
      name: "Marketing Landing Page",
      description: "Boost your business with effective marketing.",
      tech: ["react", "tailwindcss"],
    },
    {
      img: "tickets-burgas",
      url: undefined,
      source: "https://github.com/ddimitrov1108/tickets-burgas",
      type: "application",
      name: "Public Transport Ticketing App",
      description: "Purchase and validate public transport tickets.",
      tech: ["react", "redux", "tailwindcss", "csharp"],
    },
    {
      img: "saxo-trading",
      unoptimized: true,
      url: undefined,
      source: undefined,
      type: "application",
      wip: false,
      name: "Trading Platform",
      description: "Trade confidently with advanced tools.",
      tech: ["vue", "tailwindcss", "scss"],
    },
  ],
};
