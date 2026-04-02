// src/shared/types/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL: string;
    RESEND_API_KEY?: string;
    ANTHROPIC_API_KEY?: string;
  }
}
