// src/shared/components/layout/Footer.tsx
import { SITE } from "@/shared/lib/metadata";
import { NAV_LINKS } from "@/shared/lib/content";

const MARQUEE_ITEMS = [
  "laravel sorcerer",
  "·",
  "next.js builder",
  "·",
  "api optimizer",
  "·",
  "30% faster",
  "·",
  "ships on time",
  "·",
  "reads the docs",
  "·",
  "available 2026",
  "·",
  "Varanasi represent",
  "·",
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      {/* marquee strip */}
      <div
        className="overflow-hidden py-3"
        style={{ borderBottom: "1px solid var(--border)" }}
        aria-hidden="true"
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="mx-4 text-xs font-mono"
              style={{
                color: item === "·" ? "var(--accent)" : "var(--text-faint)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* main footer grid */}
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* brand */}
        <div>
          <div
            className="text-xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--accent)",
            }}
          >
            <span style={{ color: "var(--text-faint)" }}>_</span>UTKARSH
            <span style={{ color: "var(--gold)" }}>.</span>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            full-stack dev. laravel + next.js
            <br />
            b.tech IT @ REC Bijnor, &apos;26.
          </p>
          {/* available badge */}
          <div className="flex items-center gap-2 mt-3">
            <span
              className="inline-block w-2 h-2"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 8px var(--accent-glow)",
                animation: "pulse-soft 3s ease-in-out infinite",
              }}
            />
            <span
              className="text-xs font-mono"
              style={{
                color: "var(--text-faint)",
                fontFamily: "var(--font-mono)",
              }}
            >
              open to work
            </span>
          </div>
        </div>

        {/* reach */}
        <div>
          <div className="label-mono mb-4">reach</div>
          <ul className="space-y-2">
            {[
              {
                label: "virmauryauttu@gmail.com",
                href: `mailto:${SITE.email}`,
              },
              { label: "github", href: SITE.github },
              { label: "linkedin", href: SITE.linkedin },
            ].map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="text-sm transition-colors hover:opacity-80"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: href.includes("@")
                      ? "var(--font-mono)"
                      : "inherit",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* links */}
        <div>
          <div className="label-mono mb-4">navigate</div>
          <ul className="space-y-2">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div
        className="max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p
          className="text-xs font-mono"
          style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}
        >
          © 2025 UTKARSH MAURYA — built with Next.js 15 + excessive caffeine
        </p>
        {/* bottom quip */}
        <p
          className="text-xs font-mono"
          style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}
        >
          {/* no GPT slop. every pixel was a decision. */}
        </p>
      </div>
    </footer>
  );
}
