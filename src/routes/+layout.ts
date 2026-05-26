// The site is fully static content, so prerender every route to plain HTML at
// build time. This means no serverless function is deployed (and nothing to
// crash at runtime) — Vercel just serves static files.
export const prerender = true;
