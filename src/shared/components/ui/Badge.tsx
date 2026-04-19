// src/shared/components/ui/Badge.tsx
import { cn } from "@/shared/lib/utils";

type BadgeVariant = "default" | "purple" | "gold" | "ghost";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const base = "inline-flex items-center px-2.5 py-0.5 text-xs border";

  const styles: Record<BadgeVariant, React.CSSProperties> = {
    default: {
      background: "var(--surface-2)",
      color: "var(--text-muted)",
      borderColor: "var(--border)",
      fontFamily: "var(--font-mono)",
    },
    purple: {
      background: "var(--accent-dim)",
      color: "var(--accent)",
      borderColor: "var(--border)",
      fontFamily: "var(--font-mono)",
    },
    gold: {
      background: "var(--gold-dim)",
      color: "var(--gold)",
      borderColor: "var(--border-gold)",
      fontFamily: "var(--font-mono)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      borderColor: "var(--border)",
      fontFamily: "var(--font-mono)",
    },
  };

  return (
    <span className={cn(base, className)} style={styles[variant]}>
      {children}
    </span>
  );
}
