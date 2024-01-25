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
        primary: "#1f4aa6",
        secondary: "#211fa6",
      },
      animation: {
        grow: "grow 0.5s linear forwards",
      },
      keyframe: {
        grow: {
          from: {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(1.1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
