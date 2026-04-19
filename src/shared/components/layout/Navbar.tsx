"use client";
// src/shared/components/layout/Navbar.tsx
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { NAV_LINKS } from "@/shared/lib/content";
import { ThemeToggle } from "@/shared/components/ui/ThemeToggle";
import { cn } from "@/shared/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <>
      <header
        className={cn(
          "sticky top-0 inset-x-0 z-50 transition-all duration-300",
          "backdrop-blur-md bg-black/75 border-b",
        )}
        style={{
          height: "var(--nav-h)",
        }}
      >
        <nav className="h-full max-w-6xl mx-auto px-5 flex items-center justify-between">
          {/* logo */}
          <Link
            href="/"
            className="font-bold text-lg tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--accent)",
            }}
          >
            <span style={{ color: "var(--text-faint)" }}>_</span>UTKARSH
            <span style={{ color: "var(--gold)" }}>.</span>
          </Link>

          {/* desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "relative px-3 py-1.5 text-sm font-mono transition-colors duration-200",
                      "hover:text-[var(--accent)]",
                    )}
                    style={{
                      color: isActive ? "var(--accent)" : "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-[2px]"
                        style={{ background: "var(--accent)" }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* hire me CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-bold transition-all duration-200 hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), var(--gold))",
                color: "white",
                fontFamily: "var(--font-display)",
              }}
            >
              hire me
            </a>
            {/* resume download */}
            <a
              href="/UTKARSH_resume_L.pdf"
              download
              className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono transition-all duration-200"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
              }}
              aria-label="Download resume PDF"
            >
              ↓ resume
            </a>
            {/* hamburger */}
            <button
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "close menu" : "open menu"}
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[2px] rounded-full"
                style={{ background: "var(--text)" }}
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-[2px] rounded-full"
                style={{ background: "var(--text)" }}
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[2px] rounded-full"
                style={{ background: "var(--text)" }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 z-40 md:hidden pt-[var(--nav-h)]"
            style={{
              top: 0,
              background: "rgba(6, 3, 15, 0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            <ul className="flex flex-col p-6 gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-base font-mono transition-colors"
                    style={{
                      color: "var(--text-muted)",
                      borderBottom: "1px solid var(--border)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 py-2.5 text-sm font-bold text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--gold))",
                    color: "white",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  hire me
                </a>
                <a
                  href="/UTKARSH_resume_L.pdf"
                  download
                  className="flex-1 py-2.5 text-sm font-mono text-center"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  ↓ resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
