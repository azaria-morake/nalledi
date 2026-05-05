import React from "react";
import { getCapabilities } from "@/lib/api/getCapabilities";
import { CapabilityCard } from "@/features/landing/components/CapabilityCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel, Divider } from "@/components/ui/Atoms";

export async function CapabilitiesGrid() {
  const capabilities = await getCapabilities();

  return (
    <SectionWrapper id="capabilities" background="default">
      {/* Section header */}
      <div className="mb-12">
        <SectionLabel as="p" className="mb-4">
          Platform Capabilities
        </SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <h2 className="text-display-md font-semibold text-text-primary max-w-lg text-balance">
            Everything you need to build, train, and deploy.
          </h2>
          <p className="text-body-md text-text-secondary max-w-md lg:text-right text-balance">
            A complete AI research and production environment. No infrastructure overhead.
            Just compute.
          </p>
        </div>
        <Divider className="mt-8" />
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        role="list"
        aria-label="Platform capabilities"
      >
        {capabilities.map((capability, index) => (
          <div key={capability.id} role="listitem">
            <CapabilityCard capability={capability} index={index} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
