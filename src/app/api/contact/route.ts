// src/app/api/contact/route.ts
// edge runtime. 3 messages per hour per IP. honeypot spam check.
// wire up Resend when RESEND_API_KEY is set.

export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

const ipCounts = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

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

interface ContactBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  honeypot?: string;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "max 3 messages per hour. email directly if urgent." },
      { status: 429 }
    );
  }

  try {
    const body = (await req.json()) as ContactBody;

    // honeypot — bots fill this field
    if (body.honeypot) {
      // pretend it worked so bots don't retry
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // validation
    const { name, email, message } = body;
    if (!name || name.length < 2) {
      return NextResponse.json({ error: "name required (min 2 chars)" }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "valid email required" }, { status: 400 });
    }
    if (!message || message.length < 10 || message.length > 2000) {
      return NextResponse.json({ error: "message required (10–2000 chars)" }, { status: 400 });
    }

    // --- RESEND SWAP POINT ---
    // if (process.env.RESEND_API_KEY) {
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "portfolio@yourdomain.com",
    //     to: "virmauryauttu@gmail.com",
    //     subject: body.subject ?? `Portfolio contact from ${name}`,
    //     html: `<p><b>From:</b> ${name} (${email})</p><p>${message}</p>`,
    //   });
    // }

    // for now: just validate and confirm
    // in prod: add Resend
    console.log(`[contact] from=${email} name=${name} subject=${body.subject ?? "—"}`);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
