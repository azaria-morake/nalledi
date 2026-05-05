"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { InfrastructureStatus, NodeStatus } from "@/features/landing/types";

// ── Status colours ───────────────────────────────────────────
const nodeStatusColor: Record<NodeStatus, string> = {
  active: "fill-success stroke-success",
  idle: "fill-warning stroke-warning",
  degraded: "fill-warning stroke-warning",
  offline: "fill-danger stroke-danger",
};

const nodeStatusGlow: Record<NodeStatus, string> = {
  active: "drop-shadow-[0_0_6px_hsl(142,71%,45%)]",
  idle: "drop-shadow-[0_0_4px_hsl(38,92%,50%)]",
  degraded: "drop-shadow-[0_0_4px_hsl(38,92%,50%)]",
  offline: "",
};

interface NodeDiagramProps {
  data: InfrastructureStatus;
  className?: string;
}

export function NodeDiagram({ data, className }: NodeDiagramProps) {
  const { nodes, edges } = data;

  // Build a map for fast node lookups
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  return (
    <div
      className={cn("w-full", className)}
      role="img"
      aria-label="NaLledi AI Lab infrastructure topology diagram"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* Animated dash for edges */}
          <style>{`
            .edge-animated {
              stroke-dasharray: 4 3;
              animation: dash-flow 1.8s linear infinite;
            }
            @keyframes dash-flow {
              to { stroke-dashoffset: -14; }
            }
            .edge-static {
              stroke-dasharray: 3 4;
              opacity: 0.35;
            }
          `}</style>
        </defs>

        {/* Edges (render below nodes) */}
        {edges.map((edge) => {
          const from = nodeMap.get(edge.from);
          const to = nodeMap.get(edge.to);
          if (!from || !to) return null;

          return (
            <line
              key={edge.id}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="hsl(210, 100%, 56%)"
              strokeWidth="0.5"
              className={edge.animated ? "edge-animated" : "edge-static"}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const colorClass = nodeStatusColor[node.status];
          const glowClass = nodeStatusGlow[node.status];
          const isCompute = node.type === "compute";
          const isStorage = node.type === "storage";
          const r = isCompute ? 4.5 : isStorage ? 4 : 3;

          return (
            <g key={node.id} className={cn("transition-all duration-500", glowClass)}>
              {/* Outer ping ring for active nodes */}
              {node.status === "active" && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={r + 2}
                  fill="none"
                  stroke="hsl(210, 100%, 56%)"
                  strokeWidth="0.3"
                  opacity="0.25"
                  className="animate-ping"
                  style={{ animationDuration: "2.5s" }}
                />
              )}

              {/* Node circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={r}
                className={cn("stroke-[0.5]", colorClass)}
                fillOpacity={0.15}
              />

              {/* Inner dot */}
              <circle
                cx={node.x}
                cy={node.y}
                r={1.2}
                className={colorClass}
                fillOpacity={0.9}
              />

              {/* Label */}
              <text
                x={node.x}
                y={node.y + r + 3.5}
                textAnchor="middle"
                className="fill-current"
                style={{
                  fontSize: "3px",
                  fill: "hsl(220, 6%, 68%)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
