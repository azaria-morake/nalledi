import type { Capability } from "@/features/landing/types";

/**
 * getCapabilities — Fetch platform capability definitions.
 * Config-driven; replace with API fetch when backend is ready.
 */
export async function getCapabilities(): Promise<Capability[]> {
  return [
    {
      id: "train-models",
      category: "training",
      title: "Train Models",
      description:
        "Access GPU clusters configured for distributed training. Run multi-node jobs with MPI, NCCL, or DeepSpeed — from single-GPU experiments to full-scale pre-training runs.",
      features: [
        "Multi-GPU distributed training",
        "Checkpoint management & versioning",
        "Mixed precision (FP16/BF16)",
        "SLURM & Kubernetes job scheduling",
      ],
      status: "available",
      icon: "Cpu",
    },
    {
      id: "experiment",
      category: "experimentation",
      title: "Experiment Freely",
      description:
        "Persistent notebook environments with direct compute attachment. Experiment at the REPL, iterate on datasets, and run evaluations without infrastructure overhead.",
      features: [
        "Jupyter & VS Code server environments",
        "Persistent NFS storage volumes",
        "Dataset versioning with DVC",
        "Experiment tracking (MLflow / W&B compatible)",
      ],
      status: "available",
      icon: "FlaskConical",
    },
    {
      id: "collaborate",
      category: "collaboration",
      title: "Collaborate",
      description:
        "Shared project workspaces with role-based access control. Collaborate across institutions, share datasets and model artifacts, and coordinate compute allocation.",
      features: [
        "Role-based workspace permissions",
        "Model registry with lineage tracking",
        "Dataset sharing with access auditing",
        "GitHub integration for code + experiments",
      ],
      status: "available",
      icon: "Network",
    },
    {
      id: "deploy",
      category: "deployment",
      title: "Deploy",
      description:
        "Containerised model serving infrastructure. Expose inference endpoints, manage model versions, and integrate with downstream applications — all within the lab environment.",
      features: [
        "Containerised inference (Docker/OCI)",
        "Auto-scaling endpoints",
        "A/B model versioning",
        "OpenAI-compatible REST API",
      ],
      status: "beta",
      icon: "Rocket",
    },
  ];
}
