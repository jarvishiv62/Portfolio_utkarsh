// src/app/api/chat/route.ts
// edge runtime. 20 req/min rate limit.
// swap matchChatbotResponse() for Anthropic SDK when the key lands.

export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import { CHATBOT_RESPONSES } from "@/shared/lib/content";
import { matchChatbotResponse } from "@/shared/lib/utils";

// simple in-memory rate limiter for edge (per-ip, resets per cold start)
// for real rate limiting use Upstash Redis + @upstash/ratelimit
const ipCounts = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 20;
const WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipCounts.get(ip);

  if (!entry || now > entry.resetAt) {
    ipCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "slow down. 20 messages per minute max." },
      { status: 429 }
    );
  }

  try {
    const body = (await req.json()) as { message?: string };
    const message = body.message?.trim();

    if (!message || message.length > 500) {
      return NextResponse.json({ error: "message required (max 500 chars)" }, { status: 400 });
    }

    // --- ANTHROPIC SDK SWAP POINT ---
    // const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    // const response = await anthropic.messages.create({
    //   model: "claude-opus-4-6",
    //   max_tokens: 256,
    //   system: "You are utkarsh_ai.exe — the AI persona of Utkarsh Maurya...",
    //   messages: [{ role: "user", content: message }],
    // });
    // const reply = response.content[0].type === "text" ? response.content[0].text : "...";

    // rule-based for now
    const reply = matchChatbotResponse(message, CHATBOT_RESPONSES);

    return NextResponse.json({ reply }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
