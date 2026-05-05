"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-[0_1px_0_hsl(var(--color-border))]"
            : "bg-transparent",
        )}
      >
        <div className="container-layout">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none"
              aria-label={`${SITE_CONFIG.name} — Home`}
            >
              {/* Wordmark */}
              <div className="flex flex-col leading-none">
                <span className="font-mono text-mono-md font-bold text-text-primary tracking-tight uppercase">
                  NaLledi
                </span>
                <span className="font-mono text-label-sm text-text-tertiary tracking-widest uppercase">
                  AI Lab
                </span>
              </div>
              {/* Divider */}
              <div className="h-8 w-px bg-border hidden sm:block" aria-hidden="true" />
              <span className="hidden sm:block font-mono text-label-sm text-text-tertiary tracking-wider">
                ALX South Africa
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label="Primary navigation"
              className="hidden md:flex items-center gap-1"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded",
                    "font-mono text-mono-sm text-text-tertiary",
                    "transition-colors duration-150",
                    "hover:text-text-primary hover:bg-surface-elevated",
                    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-1",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: CTA + mobile trigger */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                href="/apply"
                className="hidden sm:inline-flex"
                aria-label="Request access to NaLledi AI Lab"
              >
                Request Access
              </Button>

              {/* Mobile menu toggle */}
              <button
                id="mobile-menu-toggle"
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className={cn(
                  "md:hidden p-2 rounded text-text-secondary",
                  "hover:text-text-primary hover:bg-surface-elevated",
                  "transition-colors duration-150",
                  "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-1",
                )}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <nav
          aria-label="Mobile navigation"
          className={cn(
            "absolute top-16 left-0 right-0",
            "bg-surface border-b border-border",
            "transition-transform duration-300 ease-out-expo",
            mobileOpen ? "translate-y-0" : "-translate-y-4",
          )}
        >
          <div className="container-layout py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-3 rounded",
                  "font-mono text-mono-md text-text-secondary",
                  "transition-colors duration-150",
                  "hover:text-text-primary hover:bg-surface-elevated",
                  "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-1",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Button
                variant="primary"
                href="/apply"
                className="w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Request Access
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
