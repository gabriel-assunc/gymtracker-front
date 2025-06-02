import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secundary: "var(--secundary)",
        error: "var( --error)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
