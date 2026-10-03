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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand palette (see design system: Foundations)
        brand: { DEFAULT: "#138a43", deep: "#0b3d2a" },
        ink: "#12261c",
        muted: "#55665c",
        line: "#d5e6c8",
        canvas: "#f3fbe8",
        mint: "#d9f5c5",
        sun: { DEFAULT: "#ffd23f", dark: "#d9a400" },
        aqua: "#35c4e0",
        candy: "#ff7aa8",
        grape: "#7c5cff",
        tangerine: "#ff8a3d",
        leaf: "#7be07a",
        coral: { DEFAULT: "#c93a2b", bg: "#ffe3de" },
        amberx: { DEFAULT: "#7a5200", bg: "#fff1bf" },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        heading: ["var(--font-fredoka)", "var(--font-nunito)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "Consolas", "monospace"],
      },
      boxShadow: {
        hard: "0 5px 0 #0b3d2a",
        "hard-sm": "0 4px 0 #0b3d2a",
        "hard-lg": "0 8px 0 #0b3d2a",
        "hard-line": "0 4px 0 #d5e6c8",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
