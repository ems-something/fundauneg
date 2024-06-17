import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010080",
        secondary: "#1E9AE6",
        background: "#DCDCDC"

      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
