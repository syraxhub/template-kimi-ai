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
- **Hugeicons** — Icon library dari preset shadcn (bbVKFP6)

## Theme Architecture (Token-Based)

### Source of Truth
**`src/theme/` adalah single source of truth** untuk semua styling:
- `tokens.ts` — colors, spacing, radius, shadows, breakpoints
- `typography.ts` — font sizes, weights, line heights
- `components.ts` — button, card, input, badge, table, sidebar, dll

### Workflow Ganti Style
```bash
# 1. Edit token di src/theme/
nvim src/theme/tokens.ts      # ganti colors
nvim src/theme/components.ts  # ganti component specs

# 2. Generate CSS dari token
npm run generate-css          # atau: npm run theme:sync

# 3. Build & verify
npm run build
```

### Generator Script
- **File:** `scripts/generate-css.ts`
- **Output:** `src/app/globals.css`
- **Command:** `npm run generate-css`

### Kenapa Token-Based?
1. **Shared dengan React Native** — Token bisa dipake di Expo (JS objects)
2. **Single source** — Ganti 1 tempat, efek ke Web + Native
3. **Type-safe** — TypeScript autocomplete, ga typo
4. **Programmatic** — Bisa generate CSS/JSON dari token

### Dark Mode
Token otomatis generate dark mode variables di `globals.css`.
Ganti warna dark mode? Edit bagian `dark` di `generate-css.ts`.

## Why Not
- **No Material UI / Ant Design** — Terlalu opinionated, susah kustomisasi
- **No Redux** — Next.js App Router + Server Components reduce need
- **No Docker (for now)** — Solo project, simpel dulu
