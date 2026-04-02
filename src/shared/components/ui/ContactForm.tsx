"use client";
// src/shared/components/ui/ContactForm.tsx
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import type { FormState } from "@/shared/types";

const MAX_MSG = 2000;

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [msgLen, setMsgLen] = useState(0);
  const [form, setForm] = useState({
    name: "", email: "", subject: "", message: "", honeypot: ""
  });

  function update(field: keyof typeof form, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
    if (field === "message") setMsgLen(value.length);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (form.honeypot) return; // spam bot caught
    if (!form.name || !form.email || !form.message) return;

    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  const inputClass = cn(
    "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200",
    "placeholder:opacity-50"
  );
  const inputStyle = {
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontFamily: "var(--font-body)",
  };
  const focusStyle = { borderColor: "var(--accent)", boxShadow: "0 0 0 3px var(--accent-dim)" };

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl p-8 text-center"
        style={{ background: "var(--surface)", border: "1px solid var(--accent)" }}
      >
        <div className="text-3xl mb-3">✉️</div>
        <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}>
          sent. no going back now.
        </h3>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          i&apos;ll get back within 24hr. usually faster because i check email too much.
        </p>
        <button
          onClick={() => { setState("idle"); setForm({ name: "", email: "", subject: "", message: "", honeypot: "" }); setMsgLen(0); }}
          className="mt-4 text-xs font-mono underline"
          style={{ color: "var(--text-faint)" }}
        >
          send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      {/* honeypot — hidden, bots fill this */}
      <input
        type="text" name="website" value={form.honeypot}
        onChange={(e) => update("honeypot", e.target.value)}
        tabIndex={-1} aria-hidden="true"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label-mono block mb-2">name *</label>
          <input
            className={inputClass} style={inputStyle}
            placeholder="your name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, { borderColor: "var(--border)", boxShadow: "none" })}
            required minLength={2}
          />
        </div>
        <div>
          <label className="label-mono block mb-2">email *</label>
          <input
            className={inputClass} style={inputStyle}
            type="email" placeholder="you@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, { borderColor: "var(--border)", boxShadow: "none" })}
            required
          />
        </div>
      </div>

      <div>
        <label className="label-mono block mb-2">subject (optional)</label>
        <input
          className={inputClass} style={inputStyle}
          placeholder="what's this about"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
          onBlur={(e) => Object.assign(e.target.style, { borderColor: "var(--border)", boxShadow: "none" })}
        />
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <label className="label-mono">message *</label>
          <span className="text-xs font-mono" style={{ color: msgLen > MAX_MSG * 0.9 ? "var(--gold)" : "var(--text-faint)" }}>
            {msgLen}/{MAX_MSG}
          </span>
        </div>
        <textarea
          className={cn(inputClass, "resize-none min-h-[120px]")}
          style={inputStyle}
          placeholder="// no spam, no newsletters, just a real reply."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
          onBlur={(e) => Object.assign(e.target.style, { borderColor: "var(--border)", boxShadow: "none" })}
          maxLength={MAX_MSG} required minLength={10}
        />
      </div>

      {state === "error" && (
        <p className="text-sm font-mono" style={{ color: "var(--gold)" }}>
          something went wrong. try emailing directly — virmauryauttu@gmail.com
        </p>
      )}

      <motion.button
        type="submit"
        disabled={state === "sending"}
        whileTap={{ scale: 0.97 }}
        className="w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 disabled:opacity-60"
        style={{
          background: "linear-gradient(135deg, var(--accent), var(--gold))",
          color: "white",
          fontFamily: "var(--font-display)",
        }}
      >
        {state === "sending" ? "sending..." : "send it →"}
      </motion.button>
    </form>
  );
}
