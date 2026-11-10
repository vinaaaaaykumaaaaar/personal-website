// Resolve the canonical site URL without hard-coding a domain:
//   1. NEXT_PUBLIC_SITE_URL  (set this in your env to override)
//   2. Vercel's stable production URL (injected automatically on Vercel)
//   3. localhost for local dev
const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const siteUrl = rawUrl.replace(/\/$/, '');

export const siteConfig = {
  name: 'Vinay Kumar L',
  title: 'Vinay Kumar L — Software Engineer',
  description:
    'Software Engineer building scalable systems from first principles, sharpened by modern tools and human-AI collaboration.',
  url: siteUrl,
} as const;
