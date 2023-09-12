import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poly: "PolySans Neutral",
      },
      colors: {
        black: "#121212",
        primary: "#c175ff",
        gray: "#666666",
        darkgray: "#222222",
      },
    },
  },
  plugins: [],
};
export default config;
