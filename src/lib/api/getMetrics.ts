import type { SystemMetrics } from "@/features/landing/types";

/**
 * getMetrics — Fetch live system telemetry.
 * Currently mocked. Replace fetch URL with real API endpoint.
 */
export async function getMetrics(): Promise<SystemMetrics> {
  // Simulate minor variation on each call
  const base = {
    activeUsers: 247,
    modelsRunning: 18,
    gpuUtilization: 73,
    systemUptime: 99.97,
    jobsQueued: 4,
    storageUsedGB: 18400,
    storageCapacityGB: 30720,
    networkThroughputGbps: 12.4,
    lastUpdated: new Date().toISOString(),
  };

  return {
    ...base,
    activeUsers: base.activeUsers + Math.floor(Math.random() * 10 - 5),
    modelsRunning: base.modelsRunning + Math.floor(Math.random() * 4 - 2),
    gpuUtilization: Math.min(100, Math.max(40, base.gpuUtilization + Math.floor(Math.random() * 8 - 4))),
  };
}
