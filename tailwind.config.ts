import type { Config } from "tailwindcss";
import colors from "./src/theme/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
    },
  },
  darkMode: ["class", "[class~='dark']"],
  safelist: ["dark"],
  plugins: [],
} satisfies Config;
