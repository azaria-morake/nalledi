"use client";

import React from "react";
import { useMetricsPoll } from "@/features/landing/hooks/useMetricsPoll";
import { SystemMetricWidgets } from "@/features/landing/components/MetricWidget";
import { cn } from "@/lib/utils";
import { RefreshCw } from "lucide-react";

export function LiveMetricsBar() {
  const { metrics, loading, error, refetch } = useMetricsPoll({ intervalMs: 5000 });

  return (
    <div
      className={cn(
        "bg-surface border-y border-border",
        "relative overflow-hidden",
      )}
      role="region"
      aria-label="Live system metrics"
      aria-live="polite"
      aria-atomic="false"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-layout">
        <div className="flex items-stretch border-x border-border">
          {/* Label */}
          <div
            className="flex items-center px-4 py-4 border-r border-border shrink-0"
            aria-hidden="true"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse-slow" />
              <span className="label-caps whitespace-nowrap">Live Telemetry</span>
            </div>
          </div>

          {/* Metrics */}
          {error ? (
            <div className="flex items-center gap-3 px-6 py-4 text-danger font-mono text-mono-sm">
              <span>Telemetry unavailable</span>
              <button
                onClick={refetch}
                className="text-text-tertiary hover:text-text-primary transition-colors"
                aria-label="Retry fetching metrics"
              >
                <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          ) : (
            <div className="flex overflow-x-auto no-scrollbar flex-1">
              <SystemMetricWidgets metrics={metrics} loading={loading} />
            </div>
          )}

          {/* Timestamp */}
          <div
            className="hidden lg:flex items-center px-4 border-l border-border shrink-0"
            aria-hidden="true"
          >
            <span className="font-mono text-mono-sm text-text-tertiary whitespace-nowrap">
              {metrics
                ? new Date(metrics.lastUpdated).toLocaleTimeString("en-ZA", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })
                : "—"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
