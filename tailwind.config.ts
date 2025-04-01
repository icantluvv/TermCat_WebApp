import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grayButton: "var(--grayButton)",
        activeGrayButton: "var(--activeGrayButton)"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        cygre: ["Cygre", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config
