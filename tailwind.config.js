/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        bg: "#0a0a0f",
        card: "#111114",
        border: "#1f1f23",
        accent: "#4f9bff",
        accent2: "#a855f7",
        accent3: "#22d3ee",
      },
    },
  },
  plugins: [],
}

