// tailwind.config.js
import { nextui } from "@nextui-org/react";

const MAIN_COLOR = "#F7B750";


/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: "#000000", // or DEFAULT
          foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          primary: {
            foreground: "#FFFFFF",
            DEFAULT: MAIN_COLOR,
          },
        }

      },
      light: {
        colors: {
          background: "#FFFFFF", // or DEFAULT
          foreground: "#11181C", // or 50 to 900 DEFAULT
          primary: {
            foreground: "#FFFFFF",
            DEFAULT: "#B17228",
          }
        }
      },
    }
  })]
};

export default config;