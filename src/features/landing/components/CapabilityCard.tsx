"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Atoms";
import type { Capability } from "@/features/landing/types";
import {
  Cpu,
  FlaskConical,
  Network,
  Rocket,
  ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  FlaskConical,
  Network,
  Rocket,
};

const statusLabels: Record<Capability["status"], string> = {
  available: "Available",
  beta: "Beta",
  coming_soon: "Coming Soon",
};

const statusVariants: Record<Capability["status"], "success" | "warning" | "default"> = {
  available: "success",
  beta: "warning",
  coming_soon: "default",
};

interface CapabilityCardProps {
  capability: Capability;
  index: number;
}

export function CapabilityCard({ capability, index }: CapabilityCardProps) {
  const Icon = iconMap[capability.icon] ?? Cpu;

  return (
    <div
      className={cn(
        "group relative flex flex-col",
        "card-interactive p-6",
        "focus-within:border-primary/40 focus-within:shadow-glow-sm",
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            "p-2.5 rounded border border-border bg-surface-elevated",
            "transition-all duration-300",
            "group-hover:border-primary/30 group-hover:bg-primary/5",
          )}
        >
          <Icon
            className="h-5 w-5 text-text-tertiary transition-colors duration-300 group-hover:text-primary"
            aria-hidden="true"
          />
        </div>
        <Badge
          variant={statusVariants[capability.status]}
          dot
        >
          {statusLabels[capability.status]}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="text-heading-md text-text-primary font-semibold mb-2">
        {capability.title}
      </h3>

      {/* Description */}
      <p className="text-body-sm text-text-secondary leading-relaxed mb-5 flex-1">
        {capability.description}
      </p>

      {/* Features list */}
      <ul className="space-y-1.5 mb-5" aria-label={`${capability.title} features`}>
        {capability.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 font-mono text-mono-sm text-text-tertiary"
          >
            <span
              className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0 group-hover:bg-primary/80 transition-colors"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* Footer CTA */}
      <div
        className={cn(
          "flex items-center gap-1 font-mono text-mono-sm",
          "text-text-tertiary group-hover:text-primary",
          "transition-colors duration-200",
        )}
        aria-hidden="true"
      >
        <span>Learn more</span>
        <ChevronRight
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>

      {/* Subtle accent line on bottom */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-500 group-hover:via-primary/30"
        aria-hidden="true"
      />
    </div>
  );
}
