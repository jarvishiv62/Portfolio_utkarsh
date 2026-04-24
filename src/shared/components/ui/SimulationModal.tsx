"use client";

import { motion, AnimatePresence } from "motion/react";
import { useApp } from "@/store/AppContext";
import { SIMULATIONS } from "@/data/simulations";

export function SimulationModal() {
  const { simulationState, closeSimulation, nextStep, prevStep, goToStep } =
    useApp();

  console.log("SimulationModal rendering, isOpen:", simulationState.isOpen);
  console.log(
    "Cursor should be visible:",
    simulationState.isOpen ? "YES" : "NO",
  );

  if (!simulationState.projectSlug) return null;

  const simulation = SIMULATIONS[simulationState.projectSlug];
  if (!simulation) return null;

  const currentStep =
    simulation.steps[simulationState.currentStep] || simulation.steps[0];
  const totalSteps = simulation.steps.length;

  return (
    <AnimatePresence>
      {simulationState.isOpen && (
        <div
          className="simulation-modal-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9998,
            background: "rgba(6, 3, 15, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={closeSimulation}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="simulation-modal-content max-w-4xl w-full mx-4 overflow-hidden"
            style={{
              background: "var(--raw-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "1rem",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              pointerEvents: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="p-6 border-b border-subtle"
              style={{ borderBottom: "1px solid var(--border-subtle)" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2
                    className="text-2xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--raw-warm)",
                    }}
                  >
                    {simulation.title}
                  </h2>
                  <p className="text-sm" style={{ color: "var(--raw-muted)" }}>
                    {simulation.description}
                  </p>
                </div>
                <button
                  onClick={closeSimulation}
                  className="p-2 rounded-lg hover:bg-surface-2 transition-colors"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--raw-muted)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "var(--raw-surface2)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "transparent")
                  }
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Progress indicator */}
              <div className="mt-4">
                <div
                  className="flex items-center justify-between text-xs mb-2"
                  style={{
                    color: "var(--raw-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <span>
                    Step {simulationState.currentStep + 1} of {totalSteps}
                  </span>
                  <span>
                    {Math.round(
                      ((simulationState.currentStep + 1) / totalSteps) * 100,
                    )}
                    %
                  </span>
                </div>
                <div
                  className="w-full h-1 bg-surface-2 rounded-full overflow-hidden"
                  style={{ background: "var(--raw-surface2)" }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent to-cosmic"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((simulationState.currentStep + 1) / totalSteps) * 100}%`,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background:
                        "linear-gradient(90deg, var(--raw-accent), var(--raw-cosmic))",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className="p-6 overflow-y-auto"
              style={{
                maxHeight: "calc(85vh - 180px)",
                flex: 1,
                overflowY: "auto",
              }}
            >
              <div className="mb-6">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--raw-warm)",
                  }}
                >
                  {currentStep?.title}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--raw-muted)" }}
                >
                  {currentStep?.description}
                </p>

                {/* Code block */}
                {currentStep?.code && (
                  <div className="mb-6">
                    <pre
                      className="p-4 rounded-lg overflow-x-auto text-xs"
                      style={{
                        background: "var(--raw-bg)",
                        border: "1px solid var(--border-subtle)",
                        fontFamily: "var(--font-mono)",
                        color: "var(--raw-accent)",
                        fontSize: "0.75rem",
                        lineHeight: "1.5",
                      }}
                    >
                      <code>{currentStep.code}</code>
                    </pre>
                  </div>
                )}

                {/* Details list */}
                {currentStep?.details && (
                  <div className="space-y-2">
                    {currentStep.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="text-accent mt-1"
                          style={{ color: "var(--raw-accent)" }}
                        >
                          ›
                        </span>
                        <p
                          className="text-sm"
                          style={{ color: "var(--raw-muted)" }}
                        >
                          {detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer navigation */}
            <div
              className="p-6 border-t border-subtle"
              style={{
                borderTop: "1px solid var(--border-subtle)",
                flexShrink: 0,
              }}
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={prevStep}
                  disabled={simulationState.currentStep === 0}
                  className="px-4 py-2 rounded-lg border border-subtle text-sm font-mono transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: "transparent",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--raw-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                  onMouseEnter={(e) => {
                    if (simulationState.currentStep > 0) {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--raw-surface2)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border-medium)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border-subtle)";
                  }}
                >
                  ← Previous
                </button>

                {/* Step dots */}
                <div className="flex gap-2">
                  {simulation.steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToStep(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === simulationState.currentStep
                          ? "bg-accent"
                          : "bg-surface-2 hover:bg-surface-3"
                      }`}
                      style={{
                        background:
                          index === simulationState.currentStep
                            ? "var(--raw-accent)"
                            : "var(--raw-surface2)",
                      }}
                      onMouseEnter={(e) => {
                        if (index !== simulationState.currentStep) {
                          (e.currentTarget as HTMLElement).style.background =
                            "var(--border-medium)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          index === simulationState.currentStep
                            ? "var(--raw-accent)"
                            : "var(--raw-surface2)";
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={nextStep}
                  disabled={simulationState.currentStep === totalSteps - 1}
                  className="px-4 py-2 rounded-lg border border-accent text-sm font-mono transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: "var(--raw-accent)",
                    border: "1px solid var(--raw-accent)",
                    color: "white",
                    fontFamily: "var(--font-mono)",
                  }}
                  onMouseEnter={(e) => {
                    if (simulationState.currentStep < totalSteps - 1) {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--raw-violet)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--raw-violet)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--raw-accent)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--raw-accent)";
                  }}
                >
                  {simulationState.currentStep === totalSteps - 1
                    ? "Complete"
                    : "Next →"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
