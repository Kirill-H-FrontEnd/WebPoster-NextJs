import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        index2000: "2000",
      },
      fontSize: {
        notFound: "300px",
      },
      colors: {
        blue: "#2C74B3",
        purple: "#4F46E5",
        black: "#111827",
        black_secondary: "#1C2634",
        gray: "#61677A",
        gray_light: "#F5F7F8",
        green: "#42d392",
        dark_shadow: "#222222",
        light_bg: "rgb(240 249 255 / .4)",
      },
      backgroundImage: {},
    },
  },
  plugins: [nextui()],
};
export default config;
