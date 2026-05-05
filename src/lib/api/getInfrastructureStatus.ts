import type { InfrastructureStatus, ArchitectureSpec } from "@/features/landing/types";

/**
 * getInfrastructureStatus — Returns infrastructure topology and architecture specs.
 * Node coordinates are SVG viewport percentages (0–100).
 */
export async function getInfrastructureStatus(): Promise<InfrastructureStatus> {
  return {
    nodes: [
      { id: "client", label: "Clients", type: "client", status: "active", x: 5, y: 50 },
      { id: "lb", label: "Load Balancer", type: "load_balancer", status: "active", x: 22, y: 50 },
      { id: "gateway", label: "API Gateway", type: "api_gateway", status: "active", x: 40, y: 50 },
      { id: "compute-a", label: "GPU Cluster A", type: "compute", status: "active", x: 60, y: 22 },
      { id: "compute-b", label: "GPU Cluster B", type: "compute", status: "active", x: 60, y: 50 },
      { id: "compute-c", label: "GPU Cluster C", type: "compute", status: "idle", x: 60, y: 78 },
      { id: "storage", label: "Distributed Storage", type: "storage", status: "active", x: 82, y: 50 },
    ],
    edges: [
      { id: "e-client-lb", from: "client", to: "lb", animated: true },
      { id: "e-lb-gw", from: "lb", to: "gateway", animated: true },
      { id: "e-gw-ca", from: "gateway", to: "compute-a", animated: true },
      { id: "e-gw-cb", from: "gateway", to: "compute-b", animated: true },
      { id: "e-gw-cc", from: "gateway", to: "compute-c", animated: false },
      { id: "e-ca-st", from: "compute-a", to: "storage", animated: true },
      { id: "e-cb-st", from: "compute-b", to: "storage", animated: true },
      { id: "e-cc-st", from: "compute-c", to: "storage", animated: false },
    ],
    lastUpdated: new Date().toISOString(),
  };
}

export async function getArchitectureSpecs(): Promise<ArchitectureSpec[]> {
  return [
    {
      category: "Compute",
      items: [
        "NVIDIA H100 & A100 GPU nodes",
        "High-speed NVLink interconnect",
        "RDMA-capable InfiniBand fabric",
        "Bare-metal and containerised runtimes",
      ],
    },
    {
      category: "Storage",
      items: [
        "Lustre distributed parallel filesystem",
        "NVMe-backed high-IOPS scratch storage",
        "Object storage (S3-compatible)",
        "Tiered cold archival (Glacier-class)",
      ],
    },
    {
      category: "Networking",
      items: [
        "100Gbps internal datacenter fabric",
        "BGP peered upstream connectivity",
        "Private VLAN isolation per tenant",
        "TLS 1.3 enforced on all surfaces",
      ],
    },
    {
      category: "Orchestration",
      items: [
        "SLURM workload manager",
        "Kubernetes for container workloads",
        "Automated resource quotas & fairshare",
        "Job priority queuing & preemption",
      ],
    },
  ];
}
