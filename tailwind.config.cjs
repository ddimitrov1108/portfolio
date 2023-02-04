/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        black: "#070606",
        primary: {
          light: "#3d8eff",
          main: "#0D72FF",
          dark: "#0a5bcc",
        },
        secondary: {
          light: "#dee2e6",
          main: "#ced4da",
          dark: "#adb5bd",
        },
      },
      keyframes: {
        "transform-slide-in-keyframe": {
          "0%": { transform: "translateY(-160px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        "transform-slide-in-0": "transform-slide-in-keyframe 1s ease-in-out",
        "transform-slide-in-1": "transform-slide-in-keyframe 1s ease-in-out",
        "transform-slide-in-2": "transform-slide-in-keyframe 1s ease-in-out",
        "transform-slide-in-3": "transform-slide-in-keyframe 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
