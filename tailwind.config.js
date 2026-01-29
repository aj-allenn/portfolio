/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        background: "hsl(222 47% 7%)",
        foreground: "hsl(210 40% 98%)",
        card: "hsl(222 47% 10%)",
        border: "hsl(217 33% 18%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(148,163,184,0.12), 0 18px 60px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};
