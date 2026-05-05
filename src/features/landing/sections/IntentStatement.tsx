import React from "react";
import { cn } from "@/lib/utils";

interface IntentStatementProps {
  statement?: string;
  subtext?: string;
}

export function IntentStatement({
  statement = "This is not a sandbox.\nThis is infrastructure.",
  subtext = "Every model trained here runs on production-grade compute. Every experiment is a step toward systems that matter.",
}: IntentStatementProps) {
  // Split on \n to allow line breaks
  const lines = statement.split("\n");

  return (
    <section
      aria-label="Platform intent statement"
      className={cn(
        "relative py-24 lg:py-32",
        "bg-surface border-y border-border",
        "overflow-hidden",
      )}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 grid-overlay opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-layout relative">
        <div className="max-w-container-narrow mx-auto text-center">
          {/* Primary statement */}
          <blockquote className="mb-6">
            {lines.map((line, i) => (
              <p
                key={i}
                className={cn(
                  "text-display-lg font-semibold text-text-primary",
                  "text-balance leading-[1.08]",
                  i < lines.length - 1 && "mb-2",
                )}
              >
                {line}
              </p>
            ))}
          </blockquote>

          {/* Divider rule */}
          <div
            className="flex items-center gap-4 justify-center my-8"
            aria-hidden="true"
          >
            <div className="h-px w-16 bg-border" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            <div className="h-px w-16 bg-border" />
          </div>

          {/* Sub-statement */}
          <p className="text-body-lg text-text-secondary leading-relaxed max-w-2xl mx-auto text-balance">
            {subtext}
          </p>
        </div>
      </div>
    </section>
  );
}
