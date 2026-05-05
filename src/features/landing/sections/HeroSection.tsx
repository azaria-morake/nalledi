"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel, Badge } from "@/components/ui/Atoms";
import { TerminalPanel } from "@/features/landing/components/TerminalPanel";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="NaLledi AI Lab — Hero"
      className={cn(
        "relative min-h-dvh flex items-center",
        "bg-background grid-overlay",
        "pt-24 pb-16",
      )}
    >
      {/* Ambient glow blob — purely decorative */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/4 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-layout w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 xl:gap-16 items-center">
          {/* Left column — headline + CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* System badge */}
            <motion.div variants={itemVariants}>
              <Badge variant="primary" dot>
                za-east-1 · Operational
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-display-xl font-semibold text-text-primary text-balance leading-[1.05]">
                AI Infrastructure{" "}
                <span className="text-gradient-primary">for Africa.</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-body-lg text-text-secondary leading-relaxed max-w-lg text-balance"
            >
              NaLledi AI Lab is a production-grade compute and research environment
              operated by ALX South Africa. Train large models, run experiments, and
              deploy AI systems — with infrastructure built for scale.
            </motion.p>

            {/* System spec pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2"
              aria-label="System specifications"
            >
              {[
                "24× NVIDIA H100",
                "SLURM + Kubernetes",
                "30 PB Storage",
                "100 Gbps Fabric",
              ].map((spec) => (
                <span
                  key={spec}
                  className="font-mono text-mono-sm text-text-tertiary px-3 py-1 rounded border border-border bg-surface"
                >
                  {spec}
                </span>
              ))}
            </motion.div>

            {/* CTA group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                href="/apply"
                icon={<ArrowRight className="h-4 w-4" />}
                iconPosition="right"
                aria-label="Apply for compute access to NaLledi AI Lab"
              >
                Request Access
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#capabilities"
                icon={<Terminal className="h-4 w-4" />}
                iconPosition="left"
                aria-label="View platform capabilities"
              >
                Explore Capabilities
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-mono-sm text-text-tertiary"
            >
              Operated by ALX South Africa · Institutional access only
            </motion.p>
          </motion.div>

          {/* Right column — Terminal panel */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <div className="mb-3 flex items-center justify-between">
              <SectionLabel>Live System Feed</SectionLabel>
              <span className="font-mono text-mono-sm text-text-tertiary">
                Simulated · Real-time in production
              </span>
            </div>
            <TerminalPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
