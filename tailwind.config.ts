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
        line: "#d9e3d9",
        canvas: "#f4f8f2",
        mint: "#dcefe0",
        sun: { DEFAULT: "#f5c842", dark: "#c99a00" },
        aqua: "#4db3cb",
        candy: "#ee9db6",
        grape: "#6b5bd1",
        tangerine: "#ee9a55",
        leaf: "#8cd29a",
        coral: { DEFAULT: "#c93a2b", bg: "#ffe3de" },
        amberx: { DEFAULT: "#7a5200", bg: "#fff1bf" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "Consolas", "monospace"],
      },
      boxShadow: {
        hard: "0 3px 0 #0b3d2a",
        "hard-sm": "0 2px 0 #0b3d2a",
        "hard-lg": "0 4px 0 #0b3d2a",
        "hard-line": "0 3px 0 #d9e3d9",
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
