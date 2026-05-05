/**
 * NaLledi AI Lab — Core TypeScript Types
 * All platform-wide data shapes live here.
 */

// ── System Metrics ──────────────────────────────────────────
export interface SystemMetrics {
  activeUsers: number;
  modelsRunning: number;
  gpuUtilization: number; // 0–100
  systemUptime: number;   // seconds
  jobsQueued: number;
  storageUsedGB: number;
  storageCapacityGB: number;
  networkThroughputGbps: number;
  lastUpdated: string; // ISO timestamp
}

// ── Capabilities ────────────────────────────────────────────
export type CapabilityCategory =
  | "training"
  | "experimentation"
  | "collaboration"
  | "deployment";

export interface Capability {
  id: string;
  category: CapabilityCategory;
  title: string;
  description: string;
  features: string[];
  status: "available" | "beta" | "coming_soon";
  icon: string; // Lucide icon name
}

// ── Infrastructure ──────────────────────────────────────────
export type NodeType =
  | "client"
  | "load_balancer"
  | "api_gateway"
  | "compute"
  | "storage"
  | "network";

export type NodeStatus = "active" | "idle" | "degraded" | "offline";

export interface InfraNode {
  id: string;
  label: string;
  type: NodeType;
  status: NodeStatus;
  x: number; // SVG coordinate 0–100 (percentage)
  y: number; // SVG coordinate 0–100 (percentage)
  metadata?: Record<string, string>;
}

export interface InfraEdge {
  id: string;
  from: string; // node id
  to: string;   // node id
  label?: string;
  throughput?: string;
  animated?: boolean;
}

export interface InfrastructureStatus {
  nodes: InfraNode[];
  edges: InfraEdge[];
  lastUpdated: string;
}

// ── Architecture Specs ──────────────────────────────────────
export interface ArchitectureSpec {
  category: string;
  items: string[];
}

// ── Governance ──────────────────────────────────────────────
export type GovernanceCategory =
  | "ethics"
  | "context"
  | "accountability";

export interface GovernancePrinciple {
  id: string;
  category: GovernanceCategory;
  title: string;
  body: string;
  icon: string;
  commitments: string[];
}

// ── Terminal Simulation ─────────────────────────────────────
export type TerminalLineType =
  | "command"
  | "output"
  | "success"
  | "warning"
  | "error"
  | "comment"
  | "prompt";

export interface TerminalLine {
  id: string;
  type: TerminalLineType;
  content: string;
  delay: number; // ms delay after previous line
}

// ── Access / CTA ────────────────────────────────────────────
export type CTAVariant = "primary" | "secondary";

export interface CTABlock {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  variant: CTAVariant;
  badge?: string;
}

// ── Navigation ──────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}
