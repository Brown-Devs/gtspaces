import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        cream: "#faf7f0",
        ink: {
          50: "#f4f6f8",
          100: "#e6eaee",
          200: "#c9d2db",
          300: "#a2afbe",
          400: "#78899c",
          500: "#5a6d82",
          600: "#465569",
          700: "#394656",
          800: "#232b36",
          900: "#161c25",
          950: "#0a0d13",
        },
        gold: {
          50: "#fdf8ec",
          100: "#fbedc9",
          200: "#f5d98d",
          300: "#eebf54",
          400: "#e6a92e",
          500: "#d5911f",
          600: "#b3741a",
          700: "#8f5b19",
          800: "#754a1b",
          900: "#623d1a",
        },
      },
      backgroundImage: {
        "ink-gradient": "linear-gradient(135deg, #0a0d13 0%, #161c25 55%, #232b36 100%)",
        "gold-gradient": "linear-gradient(135deg, #f5d98d 0%, #d5911f 100%)",
      },
      boxShadow: {
        premium: "0 25px 60px -20px rgba(10,13,19,0.28)",
        gold: "0 12px 30px -8px rgba(213,145,31,0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
