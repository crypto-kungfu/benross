/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    RESEND_API_KEY?: string;
    CONTACT_TO_EMAIL?: string;
    CONTACT_FROM_EMAIL?: string;
    PUBLIC_SITE_URL?: string;
    PUBLIC_PLAUSIBLE_DOMAIN?: string;
  }
}
