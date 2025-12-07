import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8E8",
        brown: "#8B4513",
        gold: "#D4A017",
        softgold: "#F4C430",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
