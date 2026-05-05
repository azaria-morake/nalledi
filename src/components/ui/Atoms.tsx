import React from "react";
import { cn } from "@/lib/utils";

// ── Badge ────────────────────────────────────────────────────
type BadgeVariant = "primary" | "default" | "success" | "warning" | "danger" | "accent";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

const badgeVariantClasses: Record<BadgeVariant, string> = {
  primary: "badge-primary",
  default: "badge-default",
  success: "badge border-success/30 bg-success/10 text-success",
  warning: "badge border-warning/30 bg-warning/10 text-warning",
  danger: "badge border-danger/30 bg-danger/10 text-danger",
  accent: "badge border-accent/30 bg-accent/10 text-accent",
};

export function Badge({
  variant = "default",
  children,
  className,
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariantClasses[variant], className)}
      role="status"
      aria-label={typeof children === "string" ? children : undefined}
    >
      {dot && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-current opacity-80 shrink-0"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

// ── SectionLabel ─────────────────────────────────────────────
interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
}

export function SectionLabel({
  children,
  className,
  as: Tag = "span",
}: SectionLabelProps) {
  return (
    <Tag className={cn("label-caps", className)}>
      {children}
    </Tag>
  );
}

// ── Divider ──────────────────────────────────────────────────
interface DividerProps {
  className?: string;
  label?: string;
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  className,
  label,
  orientation = "horizontal",
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("w-px h-full bg-border shrink-0", className)}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        className={cn("divider-label text-text-tertiary text-label-sm font-mono uppercase tracking-widest", className)}
      >
        {label}
      </div>
    );
  }

  return (
    <hr
      role="separator"
      className={cn("border-0 border-t border-border", className)}
    />
  );
}

// ── Tag ──────────────────────────────────────────────────────
interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 font-mono text-mono-sm text-text-tertiary",
        "bg-surface border border-border rounded",
        className,
      )}
    >
      {children}
    </span>
  );
}

// ── StatusDot ────────────────────────────────────────────────
type StatusType = "active" | "idle" | "degraded" | "offline";

interface StatusDotProps {
  status: StatusType;
  label?: string;
  className?: string;
}

const statusColors: Record<StatusType, string> = {
  active: "bg-success shadow-[0_0_6px_hsl(142,71%,45%)]",
  idle: "bg-warning",
  degraded: "bg-warning shadow-[0_0_6px_hsl(38,92%,50%)]",
  offline: "bg-danger",
};

export function StatusDot({ status, label, className }: StatusDotProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5", className)}
      role="status"
      aria-label={label ?? status}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full shrink-0",
          statusColors[status],
          status === "active" && "animate-pulse-slow",
        )}
        aria-hidden="true"
      />
      {label && (
        <span className="text-label-sm font-mono text-text-tertiary capitalize">
          {label}
        </span>
      )}
    </span>
  );
}
