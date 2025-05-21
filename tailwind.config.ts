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
        PageBG: "#F5F5F5",
        PrimaryBlack: "#050505",
        Gray02: "#a1a1a1",
        GrayDark: "#1F1F1F",
        Purpl: "#D3A2FB",
        LightGray: "#E8E8E8",
        Gray01: "#E1E1E1",
        BotMessageBG: "#EEE4F6",

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
