"use client";

import React, { useRef, useEffect } from "react";
import { useTerminalAnimation } from "@/features/landing/hooks/useTerminalAnimation";
import type { TerminalLineType } from "@/features/landing/types";
import { cn } from "@/lib/utils";

// ── Line colour map ──────────────────────────────────────────
const lineStyles: Record<TerminalLineType, string> = {
  comment: "text-text-tertiary",
  prompt: "text-text-tertiary",
  command: "text-text-primary font-medium",
  output: "text-text-secondary",
  success: "text-success",
  warning: "text-warning",
  error: "text-danger",
};

const linePrefix: Partial<Record<TerminalLineType, string>> = {
  prompt: "$ ",
  command: "",
  comment: "",
  output: "  ",
  success: "  ",
  warning: "  ",
  error: "  ",
};

export function TerminalPanel() {
  const { lines, isComplete } = useTerminalAnimation({ loop: true, loopDelay: 5000 });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [lines]);

  return (
    <div
      role="log"
      aria-label="System terminal simulation"
      aria-live="polite"
      aria-atomic="false"
      className={cn(
        "relative w-full rounded-lg overflow-hidden",
        "border border-border bg-terminal-bg",
        "shadow-terminal",
        "terminal-scanline",
      )}
    >
      {/* Terminal chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface/50"
        aria-hidden="true"
      >
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-danger/70" />
          <span className="h-3 w-3 rounded-full bg-warning/70" />
          <span className="h-3 w-3 rounded-full bg-success/70" />
        </div>
        <div className="flex-1 text-center">
          <span className="font-mono text-mono-sm text-text-tertiary">
            nalledi-cli — za-east-1
          </span>
        </div>
        {/* Uptime indicator */}
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-slow" />
          <span className="font-mono text-mono-sm text-success">LIVE</span>
        </span>
      </div>

      {/* Terminal body */}
      <div
        className="overflow-y-auto no-scrollbar"
        style={{ height: "340px" }}
      >
        <div className="px-4 py-4 space-y-0.5">
          {lines.map((line, index) => {
            const isLast = index === lines.length - 1;
            const prefix = linePrefix[line.type] ?? "";

            return (
              <div
                key={line.id}
                className={cn(
                  "font-mono text-mono-sm leading-6 whitespace-pre-wrap break-all",
                  lineStyles[line.type],
                )}
              >
                {line.type === "prompt" ? (
                  <span className="text-primary">❯</span>
                ) : (
                  <>
                    {prefix}
                    {line.content}
                    {/* Blinking cursor on last line */}
                    {isLast && !isComplete && (
                      <span
                        className="inline-block ml-0.5 h-[0.85em] w-[0.5ch] bg-current animate-blink align-middle"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </div>
            );
          })}
          <div ref={bottomRef} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
