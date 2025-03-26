import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f1f1f1",
        secondry: "#212121",
        marquee: "#00b9bb",
        about: "#71edbc",
        // Add a new color specifically for hover text
        hoverText: "#000000", // Replace with your desired hover text color
      },
      keyframes: {
        scrollX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        scrollXReverse: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        scrollX: "scrollX var(--duration) linear infinite",
        scrollXReverse: "scrollXReverse var(--duration) linear infinite",
      },
    },
    fontFamily: {
      FoundersGrotesk: ["FoundersGrotesk", "sans-serif"],
      NeueMontreal: ["NeueMontreal", "sans-serif"],
    },
    screens: {
      xm: { max: "400px" },
      sm: { min: "401px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px", max: "1490px" },
      xl: { min: "1491px" },
    },
  },
  plugins: [],
};
export default config;
