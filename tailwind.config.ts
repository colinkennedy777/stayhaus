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
        // Soft Charcoal — typography, and the site's one dark surface.
        ink: {
          DEFAULT: "#4A4B48",
          soft: "#63645F",
        },
        // Warm Cream — main background.
        cream: {
          DEFAULT: "#F7F3EA",
          dim: "#EFE7D5",
        },
        // Mist stays a quiet, neutral secondary background — same role as
        // the plain white/dark chrome in the reference brand this palette
        // is calibrated against. Boldness lives in the accents, not here.
        sand: {
          50: "#FBFCFC",
          100: "#D5E1E3",
          200: "#6FC7DE",
          300: "#22B8D6",
          400: "#1794AE",
          500: "#0E6E82",
        },
        // A deepened, accessible version of the bold Camel accent — used
        // anywhere Camel needs to function as legible small text (eyebrows,
        // links, marks) against Warm Cream. `light` is the full-saturation
        // Camel swatch, reserved for non-text accents (borders, dividers).
        clay: {
          DEFAULT: "#7A4112",
          light: "#B5651D",
          dark: "#5C3009",
        },
        // Powder Blue — the recognizable StayHaus brand color, pushed to a
        // bold, saturated turquoise so it reads as confident color rather
        // than a pastel. Used for surfaces, badges, active/hover states and
        // rules rather than as a small-text color on Cream (see `deep`/
        // `light` below for the text-safe variants of the same hue).
        powder: {
          DEFAULT: "#22B8D6",
          deep: "#0E6E82",
          light: "#7DD6EA",
        },
        // Full-saturation Camel, named directly for new component work.
        camel: "#B5651D",
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
