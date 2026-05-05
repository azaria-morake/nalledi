import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/Atoms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Access",
  description: "Apply for compute access to NaLledi AI Lab.",
};

export default function ApplyPage() {
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

          <SectionLabel as="p" className="mb-4">Compute Access</SectionLabel>

          <h1 className="text-display-lg font-semibold text-text-primary mb-4 text-balance">
            Apply for Access
          </h1>

          <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
            The NaLledi AI Lab access application portal is under active development.
            In the meantime, please reach out directly to our access team.
          </p>

          {/* Status card */}
          <div className="flex items-start gap-4 p-6 rounded-lg border border-warning/30 bg-warning/5 mb-8">
            <Clock className="h-5 w-5 text-warning shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-body-sm font-medium text-text-primary mb-1">
                Application Portal — Coming Soon
              </p>
              <p className="text-body-sm text-text-secondary">
                We are building a structured application system with project review,
                compute quota allocation, and institutional verification. Expected Q3 2025.
              </p>
            </div>
          </div>

          {/* Interim action */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              href="mailto:access@nalledi.ai"
              external
            >
              Email access@nalledi.ai
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
