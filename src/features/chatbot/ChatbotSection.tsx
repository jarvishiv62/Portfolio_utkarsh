"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "bot";
  content: string;
}

const STARTERS = [
  "What&apos;s his strongest skill?",
  "Tell me about DailyDrive.",
  "Real client work?",
  "Available for hire?",
  "Laravel experience?",
];

const INITIAL_MESSAGE: Message = {
  role: "bot",
  content:
    "Hey. I&apos;m UTKARSH&apos;s portfolio assistant — trained on his actual work, not vibes. Ask me anything.",
};

interface ChatbotSectionProps {
  /** compact mode used inside the floating panel */
  compact?: boolean;
}

export default function ChatbotSection({
  compact = false,
}: ChatbotSectionProps) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      setInput("");
      setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
      setLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: trimmed }),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content:
              data.content ??
              "Something went wrong. Try: virmauryauttu@gmail.com",
          },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content: "Network error. Reach UTKARSH at: virmauryauttu@gmail.com",
          },
        ]);
      } finally {
        setLoading(false);
        // Re-focus input after response
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    },
    [loading],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <div className="chatbot-shell" data-compact={compact}>
      {/* ── Window chrome bar ── */}
      <div className="chatbot-chrome">
        <span
          className="chrome-dot"
          style={{ background: "rgba(232,67,106,0.85)" }}
        />
        <span
          className="chrome-dot"
          style={{ background: "rgba(212,132,90,0.85)" }}
        />
        <span
          className="chrome-dot"
          style={{ background: "rgba(196,156,90,0.85)" }}
        />
      </div>

      {/* ── Messages area ── */}
      <div
        ref={messagesContainerRef}
        className="chatbot-messages"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`chatbot-row ${msg.role === "user" ? "row-user" : "row-bot"}`}
            >
              {msg.role === "bot" && (
                <div className="bot-avatar" aria-hidden="true">
                  ✦
                </div>
              )}
              <div
                className={`chatbot-bubble ${
                  msg.role === "user" ? "bubble-user" : "bubble-bot"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}

          {/* Loading dots */}
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="chatbot-row row-bot"
            >
              <div className="bot-avatar" aria-hidden="true">
                ✦
              </div>
              <div className="bubble-bot chatbot-bubble">
                <span
                  className="dot-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="dot-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="dot-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll anchor */}
        <div ref={messagesEndRef} style={{ height: 1 }} />
      </div>

      {/* ── Starter chips ── */}
      <div
        className="chatbot-starters"
        role="group"
        aria-label="Quick questions"
      >
        {STARTERS.map((s) => (
          <button
            key={s}
            onClick={() => send(s)}
            disabled={loading}
            className="starter-chip"
            type="button"
          >
            {s}
          </button>
        ))}
      </div>

      {/* ── Input bar ── */}
      <div className="chatbot-input-bar">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          disabled={loading}
          aria-label="Chat input"
          className="chatbot-input"
          type="text"
          autoComplete="off"
        />
        <button
          onClick={() => send(input)}
          disabled={loading || !input.trim()}
          className="chatbot-send-btn"
          type="button"
          aria-label="Send message"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
