"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ViewMode = "story" | "tech";

export interface AppContextType {
  viewMode: ViewMode;
  toggleViewMode: () => void;
  openSimulation: (slug: string) => void;
  trackEvent: (event: string) => void;
  simulationState: {
    isOpen: boolean;
    projectSlug: string | null;
    currentStep: number;
  };
  closeSimulation: () => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("story");
  const [simulationState, setSimulationState] = useState({
    isOpen: false,
    projectSlug: null as string | null,
    currentStep: 0,
  });

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "story" ? "tech" : "story"));
  };

  const openSimulation = (slug: string) => {
    setSimulationState({
      isOpen: true,
      projectSlug: slug,
      currentStep: 0,
    });
  };

  const closeSimulation = () => {
    setSimulationState({
      isOpen: false,
      projectSlug: null,
      currentStep: 0,
    });
  };

  const nextStep = () => {
    setSimulationState((prev) => ({
      ...prev,
      currentStep: prev.currentStep + 1,
    }));
  };

  const prevStep = () => {
    setSimulationState((prev) => ({
      ...prev,
      currentStep: Math.max(0, prev.currentStep - 1),
    }));
  };

  const goToStep = (step: number) => {
    setSimulationState((prev) => ({
      ...prev,
      currentStep: step,
    }));
  };

  const trackEvent = (event: string) => {
    // Placeholder for analytics
  };

  return (
    <AppContext.Provider
      value={{
        viewMode,
        toggleViewMode,
        openSimulation,
        closeSimulation,
        nextStep,
        prevStep,
        goToStep,
        simulationState,
        trackEvent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
