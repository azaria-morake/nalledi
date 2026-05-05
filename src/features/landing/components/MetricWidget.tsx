"use client";

import React from "react";
import { cn, formatNumber, formatStorage } from "@/lib/utils";
import type { SystemMetrics } from "@/features/landing/types";

interface MetricWidgetProps {
  label: string;
  value: string | number;
  unit?: string;
  subtext?: string;
  trend?: "up" | "down" | "stable";
  className?: string;
  loading?: boolean;
}

export function MetricWidget({
  label,
  value,
  unit,
  subtext,
  className,
  loading = false,
}: MetricWidgetProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-0.5 px-6 py-4",
        "border-r border-border last:border-r-0",
        className,
      )}
    >
      <span className="label-caps text-text-tertiary">{label}</span>
      {loading ? (
        <div className="h-8 w-20 rounded bg-surface-elevated animate-pulse mt-1" />
      ) : (
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className="font-mono text-display-md text-text-primary font-semibold leading-none">
            {typeof value === "number" ? formatNumber(value) : value}
          </span>
          {unit && (
            <span className="font-mono text-mono-md text-text-tertiary">{unit}</span>
          )}
        </div>
      )}
      {subtext && (
        <span className="font-mono text-mono-sm text-text-tertiary">{subtext}</span>
      )}
    </div>
  );
}

// ── Compound: Metrics from SystemMetrics ────────────────────
interface SystemMetricWidgetsProps {
  metrics: SystemMetrics | null;
  loading: boolean;
}

export function SystemMetricWidgets({ metrics, loading }: SystemMetricWidgetsProps) {
  return (
    <>
      <MetricWidget
        label="Active Users"
        value={metrics?.activeUsers ?? 0}
        subtext="Researchers online"
        loading={loading}
      />
      <MetricWidget
        label="Models Running"
        value={metrics?.modelsRunning ?? 0}
        subtext="Across all clusters"
        loading={loading}
      />
      <MetricWidget
        label="GPU Utilization"
        value={metrics?.gpuUtilization ?? 0}
        unit="%"
        subtext={`${metrics?.jobsQueued ?? 0} jobs queued`}
        loading={loading}
      />
      <MetricWidget
        label="Storage Used"
        value={metrics ? formatStorage(metrics.storageUsedGB) : "—"}
        subtext={metrics ? `of ${formatStorage(metrics.storageCapacityGB)}` : ""}
        loading={loading}
      />
      <MetricWidget
        label="Network"
        value={metrics?.networkThroughputGbps ?? 0}
        unit="Gbps"
        subtext="Internal fabric"
        loading={loading}
      />
    </>
  );
}
