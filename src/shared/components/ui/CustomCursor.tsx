"use client";
// src/shared/components/ui/CustomCursor.tsx
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useApp } from "@/store/AppContext";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const { simulationState } = useApp();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 22 });

  useEffect(() => {
    setMounted(true);
    setIsCoarse(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (!mounted || isCoarse) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
      console.log(
        "Cursor moved to:",
        e.clientX,
        e.clientY,
        "visible:",
        visible,
      );
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [mounted, isCoarse, mouseX, mouseY, visible]);

  // don't render on SSR or touch devices, or when modal is open
  if (!mounted || isCoarse || simulationState.isOpen) {
    return null;
  }

  return (
    <>
      {/* dot — snappy */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--raw-accent)",
          boxShadow: "0 0 8px var(--raw-accent)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
        animate={{ scale: clicking ? 0.5 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
      {/* ring — laggy */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "50%",
          border: "1px solid var(--raw-accent)",
          pointerEvents: "none",
          zIndex: 998,
          opacity: 0.5,
        }}
        animate={{
          scale: clicking ? 0.7 : 1,
          opacity: visible ? 0.5 : 0,
          width: clicking ? 24 : 36,
          height: clicking ? 24 : 36,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
