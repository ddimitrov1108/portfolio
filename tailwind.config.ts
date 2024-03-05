import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xxs: "375px",
        xs: "425px",
        xsm: "496px",
      },
      colors: {
        primary: {
          light: "#32a1eb",
          main: "#008ae6",
          dark: "#0070bb",
        },
        secondary: {
          light: "#d54f5a",
          main: "#cb2431",
          dark: "#b6202c",
        },
        bodyBg: "#101010",
        containerBg: "#1d1d1d",
        light: "#f1f5f9",
        main: "#9ca3af",
      },
    },
  },

  plugins: [],
};
export default config;
