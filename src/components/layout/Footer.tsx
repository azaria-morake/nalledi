import React from "react";
import Link from "next/link";
import { GitBranch, X, ExternalLink } from "lucide-react";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/config/site";
import { Divider } from "@/components/ui/Atoms";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/alxsoutheastafrica",
    Icon: GitBranch,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/alxsoutheastafrica",
    Icon: X,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/alxafrica",
    Icon: ExternalLink,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-surface border-t border-border"
    >
      <div className="container-layout py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-mono text-mono-md font-bold text-text-primary tracking-tight uppercase">
                NaLledi
              </span>
              <span className="ml-1.5 font-mono text-label-sm text-text-tertiary tracking-widest uppercase">
                AI Lab
              </span>
            </div>
            <p className="text-body-sm text-text-secondary leading-relaxed mb-6 max-w-xs">
              AI compute and research infrastructure operated by ALX South Africa.
              Building foundational systems for a continent.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE_CONFIG.name} on ${label}`}
                  className="p-2 rounded border border-border text-text-tertiary transition-all duration-200 hover:text-text-primary hover:border-border/80 hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-1"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Platform links */}
          <nav aria-label="Platform navigation">
            <h3 className="label-caps mb-4">Platform</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Organization links */}
          <nav aria-label="Organization navigation">
            <h3 className="label-caps mb-4">Organization</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.organization.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Status + contact */}
          <div>
            <h3 className="label-caps mb-4">System Status</h3>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="h-2 w-2 rounded-full bg-success animate-pulse-slow shrink-0"
                aria-hidden="true"
              />
              <span className="font-mono text-mono-sm text-success">
                All systems operational
              </span>
            </div>
            <p className="text-body-sm text-text-tertiary mb-2">
              Access inquiries:
            </p>
            <Link
              href={`mailto:${SITE_CONFIG.contact.access}`}
              className="font-mono text-mono-sm text-primary hover:text-primary/80 transition-colors"
            >
              {SITE_CONFIG.contact.access}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <Divider className="my-10" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-mono-sm text-text-tertiary">
            © {currentYear} {SITE_CONFIG.organization}. All rights reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap gap-4">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-mono text-mono-sm text-text-tertiary hover:text-text-secondary transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
