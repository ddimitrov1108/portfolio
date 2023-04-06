/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        black: "#2d2e32",
        primary: '#2F80ED',
        lightgray: "#EAF2FD",
        secondary: "#767676",
      },
    },
  },
  plugins: [],
};
