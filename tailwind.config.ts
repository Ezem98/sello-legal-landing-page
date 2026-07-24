import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FFFFFF",
        foreground: "#3A3A3A",
        primary: {
          DEFAULT: "#2D5045", // verde oscuro
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#EDE1D3", // dorado claro
          foreground: "#2D5045",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F5F0E8", // crema
          foreground: "#6B5D4F",
        },
        accent: {
          DEFAULT: "#C1573A", // terracota (CTA)
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#3A3A3A",
        },
        // Paleta de marca Sello Legal
        green: {
          DEFAULT: "#2D5045",
          50: "#EAF0EE",
          100: "#D3E0DB",
          600: "#264238",
          700: "#1F362E",
          900: "#152420",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          50: "#FCFAF6",
          100: "#FBF8F3",
        },
        gold: {
          DEFAULT: "#B8966E",
          50: "#F7F1EA",
          100: "#EDE1D3",
          200: "#DDC7AD",
          600: "#A17F58",
        },
        terracotta: {
          DEFAULT: "#C1573A",
          50: "#FBEEEB",
          100: "#F5DBD3",
          600: "#A8472E",
          700: "#8F3B26",
        },
        charcoal: {
          DEFAULT: "#3A3A3A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
