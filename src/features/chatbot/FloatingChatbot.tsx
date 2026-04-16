"use client";

import { useState, useEffect, useRef, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatbotSection from "./ChatbotSection";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const labelId = useId();

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Trap focus inside panel when open (click outside closes)
  useEffect(() => {
    if (!isOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isOpen]);

  const toggle = () => {
    setIsOpen((o) => !o);
    if (!isOpen) setHasNewMessage(false);
  };

  return (
    <>
      {/* ── Chat panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelId}
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
            className="floating-panel"
          >
            {/* Panel header */}
            <div className="floating-panel-header">
              <div className="floating-panel-title">
                <span className="panel-status-dot" aria-hidden="true" />
                <span id={labelId} className="panel-title-text">
                  Portfolio Assistant
                </span>
                <span className="panel-subtitle">powered by Gemini</span>
              </div>
              <button
                onClick={toggle}
                className="panel-close-btn"
                aria-label="Close chat"
                type="button"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Chat content */}
            <ChatbotSection compact />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB trigger button ── */}
      <motion.button
        ref={btnRef}
        onClick={toggle}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={isOpen}
        aria-controls={isOpen ? "floating-chat-panel" : undefined}
        type="button"
        className="floating-fab"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 300, damping: 24 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fab-icon"
              aria-hidden="true"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fab-icon"
              aria-hidden="true"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>

        {/* Unread notification badge */}
        <AnimatePresence>
          {hasNewMessage && !isOpen && (
            <motion.span
              key="badge"
              className="fab-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              aria-label="New message"
            />
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
