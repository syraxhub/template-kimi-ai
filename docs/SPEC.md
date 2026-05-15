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

## Acceptance Criteria
- [ ] Layout responsive (desktop, tablet, mobile)
- [ ] Sidebar collapsible
- [ ] Table dengan sorting & pagination (UI)
- [ ] Form dengan validasi client-side
- [ ] List view dengan filter & search (UI)
- [ ] Mock data structure match future DB schema
- [ ] TypeScript strict, no `any`
- [ ] Build passes (`npm run build`)
