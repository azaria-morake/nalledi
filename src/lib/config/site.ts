/**
 * NaLledi AI Lab — Site Configuration
 * Single source of truth for platform-wide constants.
 */

export const SITE_CONFIG = {
  name: "NaLledi AI Lab",
  tagline: "AI Infrastructure for Africa.",
  description:
    "A production-grade AI compute and research environment operated by ALX South Africa. " +
    "Built for researchers, engineers, and institutions building on the continent.",
  url: "https://nalledi.alxsoutheast.africa",
  organization: "ALX South Africa",
  contact: {
    access: "access@nalledi.ai",
    partnerships: "partners@nalledi.ai",
  },
} as const;

export const NAV_LINKS = [
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Governance", href: "#governance" },
  { label: "Access", href: "#access" },
] as const;

export const FOOTER_LINKS = {
  platform: [
    { label: "Infrastructure", href: "#infrastructure" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Governance", href: "#governance" },
    { label: "Request Access", href: "/apply" },
  ],
  organization: [
    { label: "About ALX SA", href: "https://alxafrica.com" },
    { label: "Partner with Us", href: "/partner" },
    { label: "Research", href: "#" },
    { label: "Contact", href: `mailto:access@nalledi.ai` },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Acceptable Use Policy", href: "#" },
  ],
} as const;
