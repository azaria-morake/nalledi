"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { getMetrics } from "@/lib/api/getMetrics";
import type { SystemMetrics } from "@/features/landing/types";

interface UseMetricsPollOptions {
  intervalMs?: number;
  enabled?: boolean;
}

interface UseMetricsPollReturn {
  metrics: SystemMetrics | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useMetricsPoll({
  intervalMs = 5000,
  enabled = true,
}: UseMetricsPollOptions = {}): UseMetricsPollReturn {
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mountedRef = useRef(true);

  const fetchMetrics = useCallback(async () => {
    try {
      const data = await getMetrics();
      if (mountedRef.current) {
        setMetrics(data);
        setError(null);
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(err instanceof Error ? err.message : "Failed to fetch metrics");
      }
    } finally {
      if (mountedRef.current) {
        setLoading(false);
      }
    }
  }, []);

  const refetch = useCallback(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  useEffect(() => {
    mountedRef.current = true;
    if (!enabled) return;

    fetchMetrics();
    intervalRef.current = setInterval(fetchMetrics, intervalMs);

    return () => {
      mountedRef.current = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [enabled, fetchMetrics, intervalMs]);

  return { metrics, loading, error, refetch };
}
