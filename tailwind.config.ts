import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#12121a",
        "surface-light": "#1a1a25",
        neon: {
          pink: "#ff2d7a",
          purple: "#a855f7",
          cyan: "#06b6d4",
          blue: "#3b82f6",
          green: "#22c55e",
          yellow: "#fbbf24",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui"],
        body: ["var(--font-body)", "system-ui"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient": `
          radial-gradient(at 40% 20%, hsla(280, 100%, 50%, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(189, 100%, 50%, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(330, 100%, 50%, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 80%, hsla(240, 100%, 50%, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(280, 100%, 50%, 0.1) 0px, transparent 50%)
        `,
      },
      boxShadow: {
        "neon-pink": "0 0 20px rgba(255, 45, 122, 0.5), 0 0 40px rgba(255, 45, 122, 0.2)",
        "neon-purple": "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.2)",
        "neon-cyan": "0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.2)",
        "neon-blue": "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
