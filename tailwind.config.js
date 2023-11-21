// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
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
          primary: {
            DEFAULT: "#F7B750",
            foreground: "#000000",
          },
          focus: "#F7B750",
        },
      },

      light: {
        colors: {
          primary: {
            DEFAULT: "#62420E",
            foreground: "#000000",
          },
          focus: "#62420E",
        },
      },
    }
  })]
};

export default config;