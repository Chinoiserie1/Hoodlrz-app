/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hoodlrz", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
