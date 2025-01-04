import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1300px",
      },
    },
    extend: {
      fontFamily: {
        urban: ["Urbanist", "sans-serif"],
        water: ["Water Brush", "sans-serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: "var(--primaryColor)",
        secondary: "var(--secondaryColor)",
        heading: "var(--headingColor)",
        text: "var(--textColor)",
      },
      boxShadow: {
        custom: "var(--boxShadow)",
      }
    },
  },
  plugins: [],
} satisfies Config;
