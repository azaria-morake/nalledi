"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { TerminalLine, TerminalLineType } from "@/features/landing/types";
import { sleep } from "@/lib/utils";

// ── Terminal sequence for the hero panel ──────────────────
const TERMINAL_SEQUENCE: Omit<TerminalLine, "id">[] = [
  { type: "comment", content: "# NaLledi AI Lab — System Initialisation", delay: 0 },
  { type: "prompt", content: "", delay: 400 },
  { type: "command", content: "nalledi init --env production --region za-east-1", delay: 600 },
  { type: "output", content: "Connecting to orchestration layer...", delay: 900 },
  { type: "output", content: "Authenticating node certificates [SHA-256]...", delay: 700 },
  { type: "success", content: "✓ Identity verified: cluster-za-east-1-001", delay: 600 },
  { type: "prompt", content: "", delay: 400 },
  { type: "command", content: "nalledi compute status --cluster all", delay: 600 },
  { type: "output", content: "Cluster A  │ 8× H100 80GB  │ active   │ 91% util", delay: 500 },
  { type: "output", content: "Cluster B  │ 8× H100 80GB  │ active   │ 68% util", delay: 300 },
  { type: "output", content: "Cluster C  │ 8× A100 40GB  │ idle     │ 12% util", delay: 300 },
  { type: "prompt", content: "", delay: 400 },
  { type: "command", content: "nalledi job submit --model llama-3-70b --nodes 4 --epochs 3", delay: 700 },
  { type: "output", content: "Allocating 4 nodes from Cluster B...", delay: 600 },
  { type: "output", content: "Distributing checkpoint: llama-3-70b-base-v2.bin", delay: 800 },
  { type: "success", content: "✓ Job queued: job-2024-0047 — ETA 4h 22m", delay: 700 },
  { type: "prompt", content: "", delay: 500 },
  { type: "command", content: "nalledi monitor --job job-2024-0047 --live", delay: 600 },
  { type: "output", content: "Epoch 1/3 ████████░░ 81%  loss: 0.4231  lr: 2.4e-5", delay: 1200 },
];

interface UseTerminalAnimationOptions {
  loop?: boolean;
  loopDelay?: number;
}

interface UseTerminalAnimationReturn {
  lines: TerminalLine[];
  isComplete: boolean;
  reset: () => void;
}

let idCounter = 0;
function nextId(): string {
  return `tl-${++idCounter}`;
}

export function useTerminalAnimation({
  loop = true,
  loopDelay = 4000,
}: UseTerminalAnimationOptions = {}): UseTerminalAnimationReturn {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const runningRef = useRef(true);
  const mountedRef = useRef(true);

  const runSequence = useCallback(async () => {
    if (!mountedRef.current) return;
    setLines([]);
    setIsComplete(false);

    for (const item of TERMINAL_SEQUENCE) {
      if (!runningRef.current || !mountedRef.current) return;
      await sleep(item.delay);
      if (!runningRef.current || !mountedRef.current) return;

      const newLine: TerminalLine = { ...item, id: nextId() };
      setLines((prev) => [...prev, newLine]);
    }

    if (!mountedRef.current) return;
    setIsComplete(true);

    if (loop) {
      await sleep(loopDelay);
      if (runningRef.current && mountedRef.current) {
        runSequence();
      }
    }
  }, [loop, loopDelay]);

  const reset = useCallback(() => {
    runningRef.current = false;
    setTimeout(() => {
      runningRef.current = true;
      runSequence();
    }, 50);
  }, [runSequence]);

  useEffect(() => {
    mountedRef.current = true;
    runSequence();
    return () => {
      mountedRef.current = false;
      runningRef.current = false;
    };
  }, [runSequence]);

  return { lines, isComplete, reset };
}

export type { TerminalLineType };
