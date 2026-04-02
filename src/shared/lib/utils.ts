// src/shared/lib/utils.ts
// utilities. nothing fancy. just stuff that should exist.

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ChatMessage } from "@/shared/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// simple keyword matcher for rule-based chatbot
// swap this whole function out when you plug in the Anthropic SDK
export function matchChatbotResponse(
  input: string,
  responses: Record<string, string>
): string {
  const lower = input.toLowerCase();

  const keywordMap: Record<string, string[]> = {
    greeting: ["hi", "hey", "hello", "sup", "yo", "hiya"],
    skills: ["skill", "best at", "good at", "strong", "know", "tech", "stack"],
    experience: ["experience", "intern", "work", "history", "job", "company", "worked"],
    projects: ["project", "built", "made", "portfolio", "show me"],
    dailydrive: ["dailydrive", "daily drive", "productivity", "pomodoro"],
    bakershub: ["baker", "bakers", "ecommerce", "e-commerce", "shop"],
    api: ["api", "response time", "performance", "optimize", "speed", "30%"],
    open: ["open", "available", "hire", "hiring", "job", "internship", "recruit"],
    contact: ["contact", "email", "reach", "dm", "message", "connect"],
    laravel: ["laravel", "php", "backend", "eloquent", "sanctum"],
    nextjs: ["next", "nextjs", "react", "frontend", "next.js"],
  };

  for (const [key, keywords] of Object.entries(keywordMap)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      return responses[key] ?? responses["default"] ?? "idk man, just email him lol";
    }
  }

  return responses["default"] ?? "idk man, just email him lol";
}

// typing dots delay helper
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// create a new chat message object
export function createMessage(
  role: ChatMessage["role"],
  content: string
): ChatMessage {
  return {
    id: generateId(),
    role,
    content,
    timestamp: new Date(),
  };
}
