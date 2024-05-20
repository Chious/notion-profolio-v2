import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#151515",
        green: "#4EE1A0",
        "light-black": "#242424",
        gray: "#D9D9D9",
        white: "#FFFFFF",
      },
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
      },
      fontSize: {
        "extra-large": "88px",
        large: "48px",
        medium: "24px",
      },
      lineHeight: {
        "extra-large": "88px",
        large: "56px",
        medium: "32px",
      },
      letterSpacing: {
        "extra-large": "-2.5px",
        large: "-1.5px",
      },
      fontWeight: {
        bold: "700",
        medium: "500",
      },
    },
  },
  plugins: [],
};
export default config;
