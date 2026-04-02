// src/shared/components/ui/SectionHeader.tsx
import { cn } from "@/shared/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <span
        className="text-xs block mb-3"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--accent)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <h2
        className="text-3xl md:text-4xl font-black leading-tight"
        style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
