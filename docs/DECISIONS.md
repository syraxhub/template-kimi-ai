# DECISIONS.md — template-kimi-ai

## Tech Stack
- **Next.js 15+ (App Router)** — Standard untuk project baru, SSR/SSG built-in
- **TypeScript strict** — Type safety, autocomplete, refactor aman
- **Tailwind CSS v4** — Utility-first, cepat, konsisten
- **shadcn/ui** — Komponen unstyled yang bisa dikustomisasi penuh
- **Prisma** — ORM type-safe, migration terstruktur
- **PostgreSQL** — Database relational, scalable

## UI/UX Decisions
- **Sidebar collapsible** — Save space di mobile, navigasi cepat di desktop
- **Card-based layout** — Modular, reusable, modern
- **Neutral color palette** — Mudah dikustomisasi (slate/gray base)
- **Lucide icons** — Konsisten, lightweight, tree-shakeable

## Why Not
- **No Material UI / Ant Design** — Terlalu opinionated, susah kustomisasi
- **No Redux** — Next.js App Router + Server Components reduce need
- **No Docker (for now)** — Solo project, simpel dulu
