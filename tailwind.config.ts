import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Semantic color system — mapped to CSS custom properties
        background: "hsl(var(--color-background) / <alpha-value>)",
        surface: "hsl(var(--color-surface) / <alpha-value>)",
        "surface-elevated": "hsl(var(--color-surface-elevated) / <alpha-value>)",
        border: "hsl(var(--color-border) / <alpha-value>)",
        "border-subtle": "hsl(var(--color-border-subtle) / <alpha-value>)",
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        "primary-muted": "hsl(var(--color-primary-muted) / <alpha-value>)",
        "primary-glow": "hsl(var(--color-primary-glow) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        "text-primary": "hsl(var(--color-text-primary) / <alpha-value>)",
        "text-secondary": "hsl(var(--color-text-secondary) / <alpha-value>)",
        "text-tertiary": "hsl(var(--color-text-tertiary) / <alpha-value>)",
        "text-inverse": "hsl(var(--color-text-inverse) / <alpha-value>)",
        terminal: "hsl(var(--color-terminal) / <alpha-value>)",
        "terminal-bg": "hsl(var(--color-terminal-bg) / <alpha-value>)",
        success: "hsl(var(--color-success) / <alpha-value>)",
        warning: "hsl(var(--color-warning) / <alpha-value>)",
        danger: "hsl(var(--color-danger) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // Design-system typography scale
        "display-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading-lg": ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "heading-md": ["clamp(1.125rem, 2vw, 1.375rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-sm": ["1rem", { lineHeight: "1.3", letterSpacing: "-0.005em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "label-lg": ["0.875rem", { lineHeight: "1", letterSpacing: "0.08em" }],
        "label-md": ["0.75rem", { lineHeight: "1", letterSpacing: "0.1em" }],
        "label-sm": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.12em" }],
        "mono-lg": ["0.9375rem", { lineHeight: "1.6" }],
        "mono-md": ["0.8125rem", { lineHeight: "1.6" }],
        "mono-sm": ["0.75rem", { lineHeight: "1.6" }],
      },
      spacing: {
        // 4px base scale extended tokens
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "section-sm": "5rem",
        "section-md": "8rem",
        "section-lg": "10rem",
      },
      maxWidth: {
        container: "1280px",
        "container-narrow": "900px",
        "container-wide": "1440px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "glow-sm": "0 0 0 1px hsl(var(--color-primary) / 0.4)",
        "glow-md": "0 0 0 1px hsl(var(--color-primary) / 0.6), 0 0 20px hsl(var(--color-primary) / 0.15)",
        "glow-lg": "0 0 0 1px hsl(var(--color-primary) / 0.8), 0 0 40px hsl(var(--color-primary) / 0.2)",
        terminal: "0 0 0 1px hsl(var(--color-border) / 0.8), 0 8px 32px hsl(0 0% 0% / 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "blink": "blink 1.2s step-end infinite",
        "flow": "flow 3s linear infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        flow: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
