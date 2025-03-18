import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "rgb(var(--color-primary-50))",
          "100": "rgb(var(--color-primary-100))",
          "200": "rgb(var(--color-primary-200))",
          "300": "rgb(var(--color-primary-300))",
          "400": "rgb(var(--color-primary-400))",
          "500": "rgb(var(--color-primary-500))",
          "600": "rgb(var(--color-primary-600))",
          "700": "rgb(var(--color-primary-700))",
          "800": "rgb(var(--color-primary-800))",
          "900": "rgb(var(--color-primary-900))",
          "950": "rgb(var(--color-primary-950))",
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          "50": "rgb(var(--color-secondary-50))",
          "100": "rgb(var(--color-secondary-100))",
          "200": "rgb(var(--color-secondary-200))",
          "300": "rgb(var(--color-secondary-300))",
          "400": "rgb(var(--color-secondary-400))",
          "500": "rgb(var(--color-secondary-500))",
          "600": "rgb(var(--color-secondary-600))",
          "700": "rgb(var(--color-secondary-700))",
          "800": "rgb(var(--color-secondary-800))",
          "900": "rgb(var(--color-secondary-900))",
          "950": "rgb(var(--color-secondary-950))",
          "purple-light": "rgb(var(--color-secondary-purple-light))",
          "purple-lighter": "rgb(var(--color-secondary-purple-lighter))",
          "purple-footer": "rgb(var(--color-secondary-purple-footer))",
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
        },
        neutral: {
          "50": "rgb(var(--color-neutral-50))",
          "100": "rgb(var(--color-neutral-100))",
          "200": "rgb(var(--color-neutral-200))",
          "300": "rgb(var(--color-neutral-300))",
          "400": "rgb(var(--color-neutral-400))",
          "500": "rgb(var(--color-neutral-500))",
          "600": "rgb(var(--color-neutral-600))",
          "700": "rgb(var(--color-neutral-700))",
          "800": "rgb(var(--color-neutral-800))",
          "900": "rgb(var(--color-neutral-900))",
          "950": "rgb(var(--color-neutral-950))",
        },
        "neutral-stroke": {
          DEFAULT: "rgb(var(--color-neutral-stroke))",
        },
        "neutral-body": {
          "1": "rgb(var(--color-neutral-body-1))",
          "2": "rgb(var(--color-neutral-body-2))",
          "3": "rgb(var(--color-neutral-body-3))",
        },
        "neutral-grey": {
          light: "rgb(var(--color-neutral-grey-light))",
          lighter: "rgb(var(--color-neutral-grey-lighter))",
        },
        "yellow-star": {
          DEFAULT: "rgb(var(--color-yellow-star))",
        },
        "text---light": {
          DEFAULT: "rgb(var(--color-text---light))",
        },
        link: {
          DEFAULT: "rgb(var(--color-link))",
        },
        success: {
          "50": "rgb(var(--color-success-50))",
          "100": "rgb(var(--color-success-100))",
          "200": "rgb(var(--color-success-200))",
          "300": "rgb(var(--color-success-300))",
          "400": "rgb(var(--color-success-400))",
          "500": "rgb(var(--color-success-500))",
          "600": "rgb(var(--color-success-600))",
          "700": "rgb(var(--color-success-700))",
          "800": "rgb(var(--color-success-800))",
          "900": "rgb(var(--color-success-900))",
          "950": "rgb(var(--color-success-950))",
        },
        warning: {
          "50": "rgb(var(--color-warning-50))",
          "100": "rgb(var(--color-warning-100))",
          "200": "rgb(var(--color-warning-200))",
          "300": "rgb(var(--color-warning-300))",
          "400": "rgb(var(--color-warning-400))",
          "500": "rgb(var(--color-warning-500))",
          "600": "rgb(var(--color-warning-600))",
          "700": "rgb(var(--color-warning-700))",
          "800": "rgb(var(--color-warning-800))",
          "900": "rgb(var(--color-warning-900))",
          "950": "rgb(var(--color-warning-950))",
          DEFAULT: "rgb(var(--warning))",
          foreground: "rgb(var(--warning-foreground))",
        },
        alert: {
          "50": "rgb(var(--color-alert-50))",
          "100": "rgb(var(--color-alert-100))",
          "200": "rgb(var(--color-alert-200))",
          "300": "rgb(var(--color-alert-300))",
          "400": "rgb(var(--color-alert-400))",
          "500": "rgb(var(--color-alert-500))",
          "600": "rgb(var(--color-alert-600))",
          "700": "rgb(var(--color-alert-700))",
          "800": "rgb(var(--color-alert-800))",
          "900": "rgb(var(--color-alert-900))",
          "950": "rgb(var(--color-alert-950))",
        },
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        card: {
          DEFAULT: "rgb(var(--card))",
          foreground: "rgb(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "rgb(var(--popover))",
          foreground: "rgb(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent))",
          foreground: "rgb(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive))",
          foreground: "rgb(var(--destructive-foreground))",
        },
        border: "rgb(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        "1": "var(--boxShadow-1)",
        "3": "var(--boxShadow-3)",
        header: "var(--boxShadow-header)",
        footer: "var(--boxShadow-footer)",
        "green-around": "var(--boxShadow-green-around)",
        "purple-around": "var(--boxShadow-purple-around)",
        "purple-light": "var(--boxShadow-purple-light)",
        "2.1": "var(--boxShadow-2_1)",
        "2.2": "var(--boxShadow-2_2)",
        "dark-inset": "var(--boxShadow-dark-inset)",
        "tab-top": "var(--boxShadow-tab-top)",
      },
      backgroundImage: {
        "gradient-secondary": "linear-gradient(182deg, rgba(135, 86, 171, 1) 1.43%, rgba(79, 43, 114, 1) 80.74%)",
        "gradient-purple-vertical":
          "linear-gradient(180deg, rgba(252, 249, 255, 1) 0%, rgba(255, 255, 255, 1) 104.04%)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0",
          xl: "5.75rem",
          "2xl": "13.75rem",
        },
      },
      screens: {
        mo: {
          max: "540px",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "scroll-rtl-primary": {
          from: {
            left: "0%",
          },

          to: {
            left: "-100%",
          },
        },
        "scroll-rtl-secondary": {
          from: {
            left: "100%",
          },

          to: {
            left: "0%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll-rtl-primary": "scroll-rtl-primary 30s linear infinite",
        "infinite-scroll-rtl-secondary": "scroll-rtl-secondary 30s linear infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
