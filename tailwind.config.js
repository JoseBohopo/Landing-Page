/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        coco: ["Coco", "sans-serif"],
        balqis: ["Balqis", "cursive"],
        archivo: ["Archivo", "sans-serif"],
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        twinkle: "twinkle 2s infinite",
        "fade-in": "fadeIn 2s ease-out",
      },
    },
  },
  plugins: [],
};