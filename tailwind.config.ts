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
        primary: {
          DEFAULT: "#141516",
          dark: "#151515",
        },
        secondary: {
          DEFAULT: "#ffffff",
          dark: "#c0c0c0",
        },
        additional: {
          DEFAULT: "#00F4A2",
          dark: "#02AE74",
        },
      },
      spacing: {
        box: "1180px",
        boxTablet: "600px",
        boxPhone: "400px",
      },
    }
  },
  plugins: [],
};
export default config;
