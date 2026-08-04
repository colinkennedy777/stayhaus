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
        // Mist (100/200) is the secondary-background family; 300 is Powder
        // Blue reused specifically as light-on-dark label text, where its
        // contrast holds up (see components/Footer, PartnerCTA, PageHero).
        sand: {
          50: "#FBFCFC",
          100: "#D5E1E3",
          200: "#B9CDD1",
          300: "#8FB7C9",
          400: "#6B94A5",
          500: "#4F7A8C",
        },
        // A deepened, accessible heritage tone carrying Camel's warmth —
        // used anywhere Camel needs to function as legible small text
        // (eyebrows, links, marks) against Warm Cream. `light` is the true
        // Camel swatch, reserved for non-text accents (borders, dividers).
        clay: {
          DEFAULT: "#7D5F3E",
          light: "#B99D7B",
          dark: "#5C4730",
        },
        // Powder Blue — the recognizable StayHaus brand color. Used for
        // surfaces, badges, active/hover states and rules rather than as a
        // small-text color, since it doesn't clear text-contrast on Cream.
        powder: {
          DEFAULT: "#8FB7C9",
          deep: "#4F7A8C",
          light: "#C7DCE4",
        },
        // True Camel, named directly for new component work.
        camel: "#B99D7B",
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
