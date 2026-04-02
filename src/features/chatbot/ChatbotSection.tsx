"use client";
// src/features/chatbot/ChatbotSection.tsx
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { RobotSVG } from "@/shared/components/ui/Svgs";
import { CHATBOT_SUGGESTIONS } from "@/shared/lib/content";
import { createMessage, sleep } from "@/shared/lib/utils";
import type { ChatMessage, ChatbotState } from "@/shared/types";

const INTRO: ChatMessage = {
  id: "intro",
  role: "assistant",
  content:
    "hey 👋 i'm the AI version of utkarsh. slightly more patient, equally obsessed with API performance. ask me anything about his stack, projects, or experience.",
  timestamp: new Date(),
};

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--text-faint)" }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </div>
  );
}

export function ChatbotSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([INTRO]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<ChatbotState>("idle");
  const bottomRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || status === "thinking") return;

    const userMsg = createMessage("user", trimmed);
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setStatus("thinking");

    // scroll to bottom
    setTimeout(
      () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
      50,
    );

    try {
      await sleep(600 + Math.random() * 600);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      const reply = data.reply ?? "idk man, just email him lol";
      setMessages((p) => [...p, createMessage("assistant", reply)]);
    } catch {
      setMessages((p) => [
        ...p,
        createMessage(
          "assistant",
          "API's not responding rn. classic. email him at virmauryauttu@gmail.com",
        ),
      ]);
    } finally {
      setStatus("done");
      setTimeout(() => setStatus("idle"), 300);
      setTimeout(
        () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
        80,
      );
    }
  }

  return (
    <section id="chatbot" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* chat window */}
          <div>
            <FadeIn>
              <SectionHeader
                label="// utkarsh_ai.exe"
                title="ask me anything"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <p
                className="mt-3 mb-6 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                rule-based for now. swap in Anthropic SDK when the API key
                lands.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              {/* terminal chrome */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                {/* title bar */}
                <div
                  className="flex items-center justify-between px-4 py-2.5"
                  style={{
                    background: "var(--surface-2)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ background: "#ff5f56" }}
                    />
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ background: "#ffbd2e" }}
                    />
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  </div>
                  <span
                    className="text-xs font-mono"
                    style={{
                      color: "var(--text-faint)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    utkarsh_ai.exe — ask anything
                  </span>
                  <div className="w-12" />
                </div>

                {/* messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4 scroll-smooth">
                  <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.28 }}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className="max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed"
                          style={
                            msg.role === "user"
                              ? {
                                  background: "var(--accent-dim)",
                                  color: "var(--text)",
                                  border: "1px solid var(--border)",
                                }
                              : {
                                  background: "var(--surface-2)",
                                  color: "var(--text-muted)",
                                  border: "1px solid var(--border)",
                                }
                          }
                        >
                          {msg.content}
                        </div>
                      </motion.div>
                    ))}

                    {status === "thinking" && (
                      <motion.div
                        key="typing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-start"
                      >
                        <div
                          className="rounded-xl"
                          style={{
                            background: "var(--surface-2)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <TypingDots />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div ref={bottomRef} />
                </div>

                {/* suggestions */}
                <div
                  className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-none"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  {CHATBOT_SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="shrink-0 text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:opacity-80 whitespace-nowrap"
                      style={{
                        background: "var(--accent-dim)",
                        color: "var(--accent)",
                        border: "1px solid var(--border)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* input */}
                <div
                  className="p-3 flex gap-2"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send(input)}
                    placeholder="type a question..."
                    className="flex-1 rounded-xl px-4 py-2.5 text-sm outline-none"
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                      fontFamily: "var(--font-body)",
                    }}
                    disabled={status === "thinking"}
                  />
                  <button
                    onClick={() => send(input)}
                    disabled={!input.trim() || status === "thinking"}
                    className="px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 disabled:opacity-40"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent), var(--gold))",
                      color: "white",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    →
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* robot SVG sidebar */}
          <div className="hidden lg:flex flex-col items-center gap-4 sticky top-24">
            <FadeIn direction="right" delay={0.3}>
              <RobotSVG
                className="w-48 h-60"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
              <p
                className="text-center text-xs font-mono mt-2"
                style={{
                  color: "var(--text-faint)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {/* not GPT. not Claude. just vibes + a switch statement. */}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
