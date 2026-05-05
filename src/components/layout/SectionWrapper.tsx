import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  spacing?: "sm" | "md" | "lg" | "none";
  background?: "default" | "surface" | "grid" | "none";
  as?: "section" | "div" | "article";
  fullWidth?: boolean;
}

const spacingClasses = {
  sm: "py-section-sm",
  md: "py-section-sm lg:py-section-md",
  lg: "py-section-md lg:py-section-lg",
  none: "",
};

const backgroundClasses = {
  default: "bg-background",
  surface: "bg-surface",
  grid: "bg-background grid-overlay",
  none: "",
};

export function SectionWrapper({
  children,
  id,
  className,
  spacing = "md",
  background = "default",
  as: Tag = "section",
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        "relative overflow-hidden",
        className,
      )}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="container-layout">{children}</div>
      )}
    </Tag>
  );
}
