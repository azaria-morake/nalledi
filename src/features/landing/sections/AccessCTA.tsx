import React from "react";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel, Divider } from "@/components/ui/Atoms";
import { cn } from "@/lib/utils";

interface CTACardProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
  variant?: "primary" | "secondary";
  features: string[];
}

function CTACard({
  title,
  description,
  ctaLabel,
  ctaHref,
  badge,
  variant = "primary",
  features,
}: CTACardProps) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={cn(
        "relative flex flex-col p-8 rounded-lg border",
        isPrimary
          ? "bg-surface-elevated border-primary/25 shadow-glow-sm"
          : "bg-surface border-border",
      )}
    >
      {badge && (
        <span
          className={cn(
            "self-start mb-5 font-mono text-label-sm uppercase tracking-widest px-2.5 py-1 rounded border",
            isPrimary
              ? "border-primary/30 bg-primary/10 text-primary"
              : "border-border bg-background text-text-tertiary",
          )}
        >
          {badge}
        </span>
      )}

      <h3 className="text-heading-lg font-semibold text-text-primary mb-3">
        {title}
      </h3>

      <p className="text-body-md text-text-secondary leading-relaxed mb-6 flex-1">
        {description}
      </p>

      {/* Feature list */}
      <ul className="space-y-2 mb-8" aria-label="Included features">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-body-sm text-text-secondary"
          >
            <span
              className={cn(
                "mt-1.5 h-1.5 w-1.5 rounded-full shrink-0",
                isPrimary ? "bg-primary/60" : "bg-border",
              )}
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={isPrimary ? "primary" : "secondary"}
        href={ctaHref}
        icon={<ArrowRight className="h-4 w-4" />}
        iconPosition="right"
        className="self-start"
      >
        {ctaLabel}
      </Button>
    </div>
  );
}

export function AccessCTA() {
  return (
    <SectionWrapper
      id="access"
      background="surface"
      aria-label="Access and partnership"
    >
      {/* Section header */}
      <div className="mb-12">
        <SectionLabel as="p" className="mb-4">
          Access
        </SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <h2 className="text-display-md font-semibold text-text-primary max-w-lg text-balance">
            Get access. Build something that matters.
          </h2>
          <p className="text-body-md text-text-secondary max-w-md lg:text-right text-balance">
            NaLledi AI Lab provides compute access to vetted researchers and institutions.
          </p>
        </div>
        <Divider className="mt-8" />
      </div>

      {/* CTA cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
        <CTACard
          variant="primary"
          badge="Researcher Access"
          title="Apply for Compute Access"
          description="Researchers and students affiliated with accredited institutions in Africa can apply for subsidised compute time. Applications are reviewed by our technical committee within 5 business days."
          ctaLabel="Apply Now"
          ctaHref="/apply"
          features={[
            "Up to 32 GPU-hours per month",
            "Access to training and inference clusters",
            "Dataset storage allocation included",
            "Technical support from the NaLledi team",
          ]}
        />
        <CTACard
          variant="secondary"
          badge="Institutional"
          title="Partner with the Lab"
          description="Academic institutions, NGOs, and mission-aligned companies can enter partnership agreements for dedicated compute allocation, collaborative research access, and co-publication opportunities."
          ctaLabel="Start a Conversation"
          ctaHref="/partner"
          features={[
            "Dedicated compute cluster allocation",
            "Joint research and co-publication support",
            "Custom SLA and governance agreements",
            "Priority access to new capabilities",
          ]}
        />
      </div>

      {/* Bottom contact bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-lg border border-border bg-background">
        <div className="flex items-center gap-3">
          <Building2 className="h-5 w-5 text-text-tertiary shrink-0" aria-hidden="true" />
          <p className="text-body-sm text-text-secondary">
            Existing ALX South Africa students and staff receive priority access.
          </p>
        </div>
        <Button
          variant="ghost"
          href="mailto:access@nalledi.ai"
          external
          size="sm"
          className="shrink-0"
        >
          access@nalledi.ai
        </Button>
      </div>
    </SectionWrapper>
  );
}
