import Link from "next/link";
import { ArrowLeft, Handshake } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/Atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with the Lab",
  description: "Enter a partnership agreement with NaLledi AI Lab.",
};

export default function PartnerPage() {
  return (
    <section className="min-h-dvh flex items-center bg-background grid-overlay pt-16">
      <div className="container-layout py-section-md">
        <div className="max-w-container-narrow mx-auto">
          {/* Back link */}
          <Link
            href="/#access"
            className="inline-flex items-center gap-2 font-mono text-mono-sm text-text-tertiary hover:text-text-primary transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to platform
          </Link>

          <SectionLabel as="p" className="mb-4">Partnerships</SectionLabel>

          <h1 className="text-display-lg font-semibold text-text-primary mb-4 text-balance">
            Partner with the Lab
          </h1>

          <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
            Academic institutions, NGOs, and mission-aligned organisations can enter
            partnership agreements for dedicated compute and collaborative research access.
          </p>

          {/* Partnership types */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "Academic Partnership",
                desc: "Joint research agreements, co-publication support, and faculty access.",
              },
              {
                title: "Institutional Partnership",
                desc: "Dedicated compute allocation, custom SLA, and governance co-design.",
              },
              {
                title: "NGO / Civil Society",
                desc: "Subsidised access for organisations building public-good AI systems.",
              },
              {
                title: "Industry Collaboration",
                desc: "Sponsored compute in exchange for research collaboration and dataset sharing.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="p-5 rounded-lg border border-border bg-surface"
              >
                <h2 className="text-heading-sm font-semibold text-text-primary mb-2">
                  {title}
                </h2>
                <p className="text-body-sm text-text-secondary">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-start gap-4 p-6 rounded-lg border border-primary/25 bg-primary/5 mb-8">
            <Handshake className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-body-sm text-text-secondary">
              To begin a partnership conversation, contact our partnerships team directly.
              Include your institution name, proposed collaboration scope, and estimated
              compute requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              href="mailto:partners@nalledi.ai"
              external
            >
              Email partners@nalledi.ai
            </Button>
            <Button variant="secondary" href="/">
              Return to Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
