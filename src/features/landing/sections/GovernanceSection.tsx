import React from "react";
import { getGovernancePrinciples } from "@/lib/api/getGovernancePrinciples";
import { GovernancePillar } from "@/features/landing/components/GovernancePillar";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel, Divider } from "@/components/ui/Atoms";

export async function GovernanceSection() {
  const principles = await getGovernancePrinciples();

  return (
    <SectionWrapper
      id="governance"
      background="default"
      aria-label="Governance and ethics"
    >
      {/* Section header */}
      <div className="mb-12">
        <SectionLabel as="p" className="mb-4">
          Governance
        </SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <h2 className="text-display-md font-semibold text-text-primary max-w-lg text-balance">
            Ethics is an engineering constraint, not an afterthought.
          </h2>
          <p className="text-body-md text-text-secondary max-w-md lg:text-right text-balance">
            Every compute allocation operates within a governance framework. Policy is
            embedded into the system architecture.
          </p>
        </div>
        <Divider className="mt-8" />
      </div>

      {/* Principles grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        role="list"
        aria-label="Governance principles"
      >
        {principles.map((principle, index) => (
          <div key={principle.id} role="listitem">
            <GovernancePillar principle={principle} index={index} />
          </div>
        ))}
      </div>

      {/* Bottom policy note */}
      <div className="mt-12 p-6 rounded-lg border border-border bg-surface">
        <p className="font-mono text-mono-md text-text-secondary text-center max-w-2xl mx-auto leading-relaxed">
          All research conducted within NaLledi AI Lab is subject to the{" "}
          <a
            href="#"
            className="text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
          >
            Acceptable Use Policy
          </a>{" "}
          and reviewed by the Independent Oversight Board. Access may be revoked
          for policy violations.
        </p>
      </div>
    </SectionWrapper>
  );
}
