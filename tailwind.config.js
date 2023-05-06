/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        black: "#2d2e32",
        primary: "#2F80ED",
        lightgray: "#EAF2FD",
        secondary: "#767676",
      },
    },
  },
  plugins: [],
};
