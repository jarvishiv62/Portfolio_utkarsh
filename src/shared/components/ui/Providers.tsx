"use client";
// src/shared/components/ui/Providers.tsx
import { CustomCursor } from "./CustomCursor";
import { EasterEggBar } from "./EasterEggBar";
import { ScrollProgress } from "./ScrollProgress";
import { ScrollToTop } from "./ScrollToTop";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      {children}
      <ScrollToTop />
      <EasterEggBar />
    </>
  );
}
