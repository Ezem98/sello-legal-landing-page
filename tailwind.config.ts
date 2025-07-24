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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FFFFFF",
        foreground: "#967C52",
        primary: {
          DEFAULT: "#967C52", // muted brown
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F0F0D8", // light yellowish-beige
          foreground: "#967C52",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#FFFAEB", // very light beige
          foreground: "#967C52",
        },
        accent: {
          DEFAULT: "#0CA5B0", // teal accent
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#967C52",
        },
        // Custom colors from new palette
        teal: {
          DEFAULT: "#0CA5B0",
          50: "#E6F7F8",
          100: "#B3E8EB",
          500: "#0CA5B0",
        },
        sage: {
          DEFAULT: "#A5B3AA",
          50: "#F5F7F6",
          100: "#E8EDEA",
        },
        cream: {
          DEFAULT: "#FEFEEB",
          100: "#F8F4E4",
        },
        brown: {
          DEFAULT: "#967C52",
          dark: "#4E3F30",
        },
        beige: {
          50: "#FFFAEB",
          100: "#F0F0D8",
          200: "#CFCFCF",
          300: "#967C52",
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
