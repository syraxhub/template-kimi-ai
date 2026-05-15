# SPEC.md — template-kimi-ai

## Problem
Developer butuh template UI yang bisa langsung dipakai di project Next.js baru. Setiap kali bikin project, harus setup layout, komponen dasar, dan styling dari nol — memakan waktu 1-2 hari.

## Goal
Bikin template UI lengkap yang bisa di-copy-paste ke project baru. Fokus pada:
- Layout konsisten (sidebar, header, main content)
- Komponen reusable (list, form, table)
- Desain clean & modern yang bisa dikustomisasi
- Mock data yang siap migrasi ke database

## Use Case
1. Developer bikin project baru
2. Copy template ini
3. Customize warna & branding
4. Ganti mock data dengan API call
5. Ship lebih cepat

## Style Customization Guide

### Ganti Warna (Token-Based)

Semua warna diatur di `src/theme/tokens.ts`. Jangan edit `globals.css` langsung.

**Contoh: Ganti primary color dari neutral ke blue**

```typescript
// src/theme/tokens.ts
export const colors = {
  primary: {
    DEFAULT: '#0ea5e9',    // ← ganti dari #171717
    foreground: '#ffffff',
    hover: '#0284c7',
  },
  // ... rest unchanged
}
```

**Generate CSS:**
```bash
npm run generate-css   # regenerate globals.css dari token
npm run build          # verify build passes
```

### Ganti Border Radius

```typescript
// src/theme/tokens.ts
export const radius = {
  lg: 16,   // ← ganti dari 10
  // ... rest unchanged
}
```

### Ganti Font

```typescript
// src/theme/typography.ts
export const fontFamily = {
  sans: 'Inter, system-ui, sans-serif',  // ← ganti dari Figtree
}
```

Jangan lupa update `src/app/layout.tsx` juga untuk load font-nya.

### File yang Boleh Diedit
| File | Purpose |
|------|---------|
| `src/theme/tokens.ts` | Colors, spacing, radius, shadows |
| `src/theme/typography.ts` | Font family, sizes, weights |
| `src/theme/components.ts` | Component specs (button, card, dll) |

### File yang Jangan Diedit Manual
| File | Why |
|------|-----|
| `src/app/globals.css` | Auto-generated dari token |
| `src/components/ui/*` | shadcn components (use `npx shadcn add`) |

### Dark Mode
Dark mode otomatis dari token. Edit section `dark` di `scripts/generate-css.ts` kalau perlu customize.

## Acceptance Criteria
- [ ] Layout responsive (desktop, tablet, mobile)
- [ ] Sidebar collapsible
- [ ] Table dengan sorting & pagination (UI)
- [ ] Form dengan validasi client-side
- [ ] List view dengan filter & search (UI)
- [ ] Mock data structure match future DB schema
- [ ] TypeScript strict, no `any`
- [ ] Build passes (`npm run build`)
- [x] Token-based theme system
- [x] CSS generator script (`npm run generate-css`)
