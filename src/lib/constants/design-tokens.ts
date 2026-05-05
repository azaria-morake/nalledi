/**
 * NaLledi AI Lab — Design Tokens (TypeScript)
 * Single source of truth for programmatic token access.
 * Mirrors the CSS custom property system in globals.css.
 */

export const colors = {
  // Backgrounds
  background: "hsl(220, 16%, 5%)",
  surface: "hsl(220, 14%, 8%)",
  surfaceElevated: "hsl(220, 12%, 11%)",

  // Borders
  border: "hsl(220, 10%, 18%)",
  borderSubtle: "hsl(220, 10%, 14%)",

  // Accent system
  primary: "hsl(210, 100%, 56%)",
  primaryMuted: "hsl(210, 80%, 40%)",
  primaryGlow: "hsl(210, 100%, 56%)",
  accent: "hsl(190, 90%, 50%)",

  // Text
  textPrimary: "hsl(220, 8%, 96%)",
  textSecondary: "hsl(220, 6%, 68%)",
  textTertiary: "hsl(220, 5%, 45%)",
  textInverse: "hsl(220, 16%, 5%)",

  // Terminal
  terminal: "hsl(140, 100%, 60%)",
  terminalBg: "hsl(220, 20%, 3%)",

  // Status
  success: "hsl(142, 71%, 45%)",
  warning: "hsl(38, 92%, 50%)",
  danger: "hsl(0, 84%, 60%)",
} as const;

export const typography = {
  fontSans: '"Inter", system-ui, sans-serif',
  fontMono: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',

  // Scale
  displayXl: "clamp(2.5rem, 5vw, 4.5rem)",
  displayLg: "clamp(2rem, 4vw, 3.5rem)",
  displayMd: "clamp(1.5rem, 3vw, 2.25rem)",
  headingLg: "clamp(1.25rem, 2.5vw, 1.75rem)",
  headingMd: "clamp(1.125rem, 2vw, 1.375rem)",
  headingSm: "1rem",
  bodyLg: "1.125rem",
  bodyMd: "1rem",
  bodySm: "0.875rem",
  monoLg: "0.9375rem",
  monoMd: "0.8125rem",
  monoSm: "0.75rem",
  labelLg: "0.875rem",
  labelMd: "0.75rem",
  labelSm: "0.6875rem",
} as const;

export const spacing = {
  base: 4, // 4px base unit
  xs: "0.25rem",   // 4px
  sm: "0.5rem",    // 8px
  md: "1rem",      // 16px
  lg: "1.5rem",    // 24px
  xl: "2rem",      // 32px
  "2xl": "3rem",   // 48px
  "3xl": "4rem",   // 64px
  "4xl": "5rem",   // 80px
  sectionSm: "5rem",
  sectionMd: "8rem",
  sectionLg: "10rem",
} as const;

export const motion = {
  durationFast: 120,
  durationBase: 220,
  durationSlow: 400,
  durationSlower: 700,
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  easeInOut: [0.87, 0, 0.13, 1] as const,
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type ColorToken = keyof typeof colors;
export type SpacingToken = keyof typeof spacing;
