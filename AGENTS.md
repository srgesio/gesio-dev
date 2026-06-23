<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Gesio-dev

Personal portfolio site (pt-BR) for Gésio de Moura — systems engineer & UI designer.

## Stack

- **Next.js 16.2.9** App Router, **React 19.2.4**
- **Tailwind CSS v4** (`@import "tailwindcss"`, `@theme` directive, CSS-based config — not v3)
- **TypeScript** strict, bundler module resolution, `@/*` → root
- **ESLint** via `eslint-config-next` (core-web-vitals + typescript)

## Commands

```sh
npm run dev      # dev server on localhost:3000
npm run build    # production build
npm run lint     # eslint
```

No test framework is configured.

## Architecture

```
app/layout.tsx       — root layout (Poppins font, Header/Footer)
app/page.tsx         — home page (Hero > Experience > Testimonials)
app/hooks/           — client hooks (e.g. useScrollDirection)
components/<Name>/   — each component is a directory with index.tsx
lib/utils.ts         — cn() helper (clsx + tailwind-merge)
```

- Interactive components use `"use client"` directive.
- Dark mode via `prefers-color-scheme` media query (no toggle).
- Path alias `@/` maps to project root.
- `CLAUDE.md` references this file only.
