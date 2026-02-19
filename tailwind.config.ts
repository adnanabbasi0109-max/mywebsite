import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        "off-white": "#f0ede8",
        accent: "#e8e0d4",
        muted: "#3a3a3a",
        "glass-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "clamp(3.5rem, 8vw, 6.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-md": [
          "clamp(2rem, 4vw, 3rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(20,60,80,0.3) 0%, rgba(10,10,10,0) 70%)",
        "hero-gradient-alt":
          "radial-gradient(ellipse 60% 50% at 60% 50%, rgba(30,70,60,0.25) 0%, rgba(10,10,10,0) 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(30,60,80,0.4) 0%, rgba(20,40,50,0.2) 50%, rgba(40,30,60,0.3) 100%)",
        "company-gradient":
          "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(25,50,60,0.2) 0%, rgba(10,10,10,0) 70%)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
        "hue-rotate": {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(2deg)" },
          "50%": { transform: "translateY(-12px) rotate(-1deg)" },
        },
      },
      animation: {
        breathe: "breathe 8s ease-in-out infinite",
        "hue-slow": "hue-rotate 12s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      borderColor: {
        "white/8": "rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
