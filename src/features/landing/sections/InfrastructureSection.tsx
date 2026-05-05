import React from "react";
import { getInfrastructureStatus, getArchitectureSpecs } from "@/lib/api/getInfrastructureStatus";
import { NodeDiagram } from "@/features/landing/components/NodeDiagram";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel, Divider, StatusDot } from "@/components/ui/Atoms";
import { cn } from "@/lib/utils";

export async function InfrastructureSection() {
  const [infraStatus, archSpecs] = await Promise.all([
    getInfrastructureStatus(),
    getArchitectureSpecs(),
  ]);

  const activeNodes = infraStatus.nodes.filter((n) => n.status === "active").length;
  const totalNodes = infraStatus.nodes.length;

  return (
    <SectionWrapper
      id="infrastructure"
      background="surface"
      aria-label="Infrastructure overview"
    >
      {/* Section header */}
      <div className="mb-12">
        <SectionLabel as="p" className="mb-4">
          Infrastructure
        </SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <h2 className="text-display-md font-semibold text-text-primary max-w-lg text-balance">
            Production-grade compute. Built to scale.
          </h2>
          <div className="flex items-center gap-3">
            <StatusDot
              status="active"
              label={`${activeNodes}/${totalNodes} nodes active`}
            />
          </div>
        </div>
        <Divider className="mt-8" />
      </div>

      {/* Split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        {/* Left: Architecture specs */}
        <div className="space-y-8">
          {archSpecs.map((spec) => (
            <div key={spec.category}>
              <h3 className="label-caps mb-3">{spec.category}</h3>
              <ul className="space-y-2" aria-label={`${spec.category} specifications`}>
                {spec.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-body-sm text-text-secondary"
                  >
                    <span
                      className="mt-2 h-1 w-4 bg-primary/40 rounded-full shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right: SVG node diagram */}
        <div
          className={cn(
            "relative rounded-lg border border-border bg-terminal-bg p-6",
            "shadow-terminal",
          )}
        >
          {/* Diagram header */}
          <div
            className="flex items-center justify-between mb-4"
            aria-hidden="true"
          >
            <span className="label-caps">Topology — za-east-1</span>
            <div className="flex items-center gap-4">
              {[
                { label: "Active", color: "bg-success" },
                { label: "Idle", color: "bg-warning" },
                { label: "Offline", color: "bg-danger" },
              ].map(({ label, color }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <span className={cn("h-2 w-2 rounded-full", color)} />
                  <span className="font-mono text-mono-sm text-text-tertiary">{label}</span>
                </span>
              ))}
            </div>
          </div>

          <NodeDiagram
            data={infraStatus}
            className="h-56 lg:h-72"
          />

          {/* Node count badges */}
          <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-2">
            {infraStatus.nodes.map((node) => (
              <span
                key={node.id}
                className="flex items-center gap-1.5 font-mono text-mono-sm text-text-tertiary"
              >
                <StatusDot status={node.status} />
                <span>{node.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
