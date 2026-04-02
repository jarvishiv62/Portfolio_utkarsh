"use client";
// src/shared/hooks/useTypewriter.ts
import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
}

export function useTypewriter({
  words,
  speed = 80,
  deleteSpeed = 40,
  pauseMs = 2200,
}: UseTypewriterOptions) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length] ?? "";

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(current.substring(0, displayed.length + 1));
          if (displayed.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pauseMs);
          }
        } else {
          setDisplayed(current.substring(0, displayed.length - 1));
          if (displayed.length === 0) {
            setIsDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, speed, deleteSpeed, pauseMs]);

  return displayed;
}
