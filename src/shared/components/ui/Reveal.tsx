"use client";
import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  className,
  once = true,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.22, 1, 0.36, 1], duration, delay },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
