// src/app/not-found.tsx
import Link from "next/link";
import { LostAstronautSVG } from "@/shared/components/ui/Svgs";

export default function NotFound() {
  return (
    <div
      className="min-h-[90dvh] flex items-center justify-center px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="text-center max-w-xs">
        <LostAstronautSVG className="w-52 h-64 mx-auto mb-6 opacity-80" />
        <h1
          className="text-4xl font-black mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
        >
          404
        </h1>
        <p className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>
          this page doesn&apos;t exist.
        </p>
        <p className="text-xs mb-6" style={{ color: "var(--text-faint)" }}>
          neither does work-life balance, but here we are.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl font-bold text-sm"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--gold))",
            color: "white",
            fontFamily: "var(--font-display)",
          }}
        >
          back to reality
        </Link>
      </div>
    </div>
  );
}
