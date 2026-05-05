import type { GovernancePrinciple } from "@/features/landing/types";

/**
 * getGovernancePrinciples — Returns the AI governance pillar definitions.
 */
export async function getGovernancePrinciples(): Promise<GovernancePrinciple[]> {
  return [
    {
      id: "ethical-ai",
      category: "ethics",
      title: "Ethical AI",
      body:
        "Every model trained and deployed within NaLledi Lab operates under an ethical review framework. Bias auditing, fairness evaluation, and harm assessment are embedded into the research lifecycle — not bolted on after the fact.",
      icon: "Scale",
      commitments: [
        "Mandatory bias evaluation for classification models",
        "Harm potential review before production deployment",
        "Transparency reports published quarterly",
        "Opt-out rights enforced for data subjects",
      ],
    },
    {
      id: "context-alignment",
      category: "context",
      title: "Context Alignment",
      body:
        "AI systems must reflect the societies they serve. Research conducted here prioritises African languages, datasets, and use cases — ensuring continental relevance is an engineering constraint, not an afterthought.",
      icon: "Globe",
      commitments: [
        "African language model prioritisation",
        "Local dataset sourcing requirements",
        "Community review panels for impactful research",
        "Multilingual interface and documentation standards",
      ],
    },
    {
      id: "accountability",
      category: "accountability",
      title: "Accountability",
      body:
        "Access to compute is access to power. NaLledi Lab maintains full audit trails, enforces usage policy compliance, and operates under an independent oversight board. Researchers are accountable for outputs — and so are we.",
      icon: "ShieldCheck",
      commitments: [
        "Full compute audit trail per user and job",
        "Independent oversight board with veto authority",
        "Usage policy violation escalation protocol",
        "Annual external accountability review",
      ],
    },
  ];
}
