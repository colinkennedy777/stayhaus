import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#221F1B",
          soft: "#3A362F",
        },
        cream: {
          DEFAULT: "#FAF6EF",
          dim: "#F2ECE0",
        },
        sand: {
          50: "#FBF8F2",
          100: "#F4EEE1",
          200: "#E9DFC9",
          300: "#DACBA8",
          400: "#C6B085",
          500: "#B0966A",
        },
        clay: {
          DEFAULT: "#AE5E3E",
          light: "#C2775A",
          dark: "#8B4830",
        },
        sage: {
          DEFAULT: "#6E7255",
          light: "#8B9070",
          dark: "#4F5340",
        },
        brass: "#A98A4D",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
