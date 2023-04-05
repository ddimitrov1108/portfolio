/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
}
