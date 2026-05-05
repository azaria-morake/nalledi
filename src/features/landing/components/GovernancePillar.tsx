"use client";

import React from "react";
import { Scale, Globe, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GovernancePrinciple } from "@/features/landing/types";

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Globe,
  ShieldCheck,
};

const categoryAccent: Record<GovernancePrinciple["category"], string> = {
  ethics: "text-accent border-accent/20 bg-accent/5",
  context: "text-primary border-primary/20 bg-primary/5",
  accountability: "text-success border-success/20 bg-success/5",
};

interface GovernancePillarProps {
  principle: GovernancePrinciple;
  index: number;
}

export function GovernancePillar({ principle, index }: GovernancePillarProps) {
  const Icon = iconMap[principle.icon] ?? Scale;
  const accentClasses = categoryAccent[principle.category];

  return (
    <div
      className={cn(
        "group flex flex-col",
        "border border-border bg-surface rounded-lg p-6",
        "transition-all duration-300",
        "hover:border-border/80",
      )}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Icon */}
      <div
        className={cn(
          "inline-flex p-3 rounded border mb-5 w-fit",
          accentClasses,
          "transition-all duration-300",
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="text-heading-md text-text-primary font-semibold mb-3">
        {principle.title}
      </h3>

      {/* Body */}
      <p className="text-body-sm text-text-secondary leading-relaxed mb-6 flex-1">
        {principle.body}
      </p>

      {/* Commitments */}
      <div>
        <p className="label-caps mb-3">Commitments</p>
        <ul
          className="space-y-2"
          aria-label={`${principle.title} commitments`}
        >
          {principle.commitments.map((commitment) => (
            <li
              key={commitment}
              className="flex items-start gap-2.5 text-body-sm text-text-secondary"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 rounded-full bg-border shrink-0"
                aria-hidden="true"
              />
              {commitment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
