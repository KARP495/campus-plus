import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        campus: {
          DEFAULT: "#0A66F5",
          dark: "#0848B8",
          light: "#EAF2FE",
        },
        ink: { DEFAULT: "#0B1F3A", soft: "#5B6B80" },
        line: "#E3E9F2",
        paper: "#F7F9FC",
        ok: "#16A34A",
        warn: "#F59E0B",
        alert: "#EF4444",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans Variable'", "system-ui", "sans-serif"],
        sans: ["'Inter Variable'", "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "20px", xl3: "28px" },
      boxShadow: {
        soft: "0 1px 2px rgba(11,31,58,.04), 0 8px 24px -12px rgba(11,31,58,.12)",
        lift: "0 2px 4px rgba(10,102,245,.06), 0 18px 40px -16px rgba(10,102,245,.35)",
      },
    },
  },
  plugins: [],
};
export default config;
