"use client";
// src/shared/components/ui/Providers.tsx
import { CustomCursor } from "./CustomCursor";
import { EasterEggBar } from "./EasterEggBar";
import { ScrollProgress } from "./ScrollProgress";
import { ScrollToTop } from "./ScrollToTop";
import { AppProvider } from "@/store/AppContext";
import { SimulationModal } from "./SimulationModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <CustomCursor />
      <ScrollProgress />
      {children}
      <ScrollToTop />
      <EasterEggBar />
      <SimulationModal />
    </AppProvider>
  );
}
