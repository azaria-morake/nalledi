import { Suspense } from "react";
import { HeroSection } from "@/features/landing/sections/HeroSection";
import { IntentStatement } from "@/features/landing/sections/IntentStatement";
import { CapabilitiesGrid } from "@/features/landing/sections/CapabilitiesGrid";
import { InfrastructureSection } from "@/features/landing/sections/InfrastructureSection";
import { GovernanceSection } from "@/features/landing/sections/GovernanceSection";
import { LiveMetricsBar } from "@/features/landing/sections/LiveMetricsBar";
import { AccessCTA } from "@/features/landing/sections/AccessCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NaLledi AI Lab — AI Infrastructure for Africa",
  description:
    "A production-grade AI compute and research environment operated by ALX South Africa. " +
    "Train large models, experiment freely, and deploy AI systems with infrastructure built for scale.",
};

// Skeleton fallback for async sections
function SectionSkeleton() {
  return (
    <div className="py-section-sm lg:py-section-md">
      <div className="container-layout">
        <div className="h-8 w-32 rounded bg-surface animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-64 rounded-lg bg-surface animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <>
      {/* 1 — Hero: full-screen value proposition + terminal */}
      <HeroSection />

      {/* 2 — Live telemetry bar */}
      <LiveMetricsBar />

      {/* 3 — Intent statement: full-width banner */}
      <IntentStatement />

      {/* 4 — Capabilities: 2×2 card grid */}
      <Suspense fallback={<SectionSkeleton />}>
        <CapabilitiesGrid />
      </Suspense>

      {/* 5 — Infrastructure: split layout + topology diagram */}
      <Suspense fallback={<SectionSkeleton />}>
        <InfrastructureSection />
      </Suspense>

      {/* 6 — Governance: three-pillar */}
      <Suspense fallback={<SectionSkeleton />}>
        <GovernanceSection />
      </Suspense>

      {/* 7 — Access CTA: researcher + institutional paths */}
      <AccessCTA />
    </>
  );
}
