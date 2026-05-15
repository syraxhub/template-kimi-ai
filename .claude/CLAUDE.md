# Project Context for AI Assist

## Stack
- Node 20+, Next.js 15+, TypeScript strict
- Tailwind CSS v4 + shadcn/ui
- Prisma ORM + PostgreSQL
- Testing: Vitest (planned)

## Key Files
- [SPEC](../docs/SPEC.md) — Problem & goals
- [SCHEMA](../docs/SCHEMA.md) — Data model
- [DECISIONS](../docs/DECISIONS.md) — Architecture picks
- [PROGRESS](../docs/PROGRESS.md) — Status & completed features

## Conventions
- Naming: camelCase functions, PascalCase components, kebab-case files
- Folder: src/{feature}/{type}.ts or src/components/{category}
- Error: throw new Error() with descriptive message
- Testing: .test.ts collocated with code (planned)

## Do's
- Run `npm run build` after file changes
- Use shadcn components when possible
- Keep mock data structure matching future DB schema
- Update PROGRESS.md after each feature

## Don'ts
- Don't modify schema without updating SCHEMA.md
- Don't commit to main without testing
- Don't ignore TypeScript errors
- Don't start backend until frontend 100% approved

## Commands
- `npm run dev` — start dev server
- `npm run build` — typecheck & bundle
- `npm run generate-css` — regenerate globals.css from tokens
- `npm run theme:sync` — generate-css + confirmation
- `npx prisma migrate dev` — apply DB migrations
- `npx prisma generate` — regenerate Prisma client

## Theme System (Token-Based)

**Source of truth: `src/theme/`**
- `tokens.ts` — colors, spacing, radius, shadows
- `typography.ts` — font family, sizes, weights
- `components.ts` — button, card, input, badge, etc specs

**To change styles:**
1. Edit files in `src/theme/`
2. Run `npm run generate-css`
3. Run `npm run build` to verify

**NEVER edit `src/app/globals.css` manually** — it's auto-generated.

**Token values are shared with React Native** — keep JS-friendly (hex colors, pixel values).

## Development Phases

### Phase 1: Frontend (No Backend)
- All pages built
- All interactions work
- Mock data in place
- **Status: ⏳ In Progress**

### Phase 2: Backend (After Frontend Approved)
- API endpoints
- Database migrations
- Connect frontend to API
- **Status: ⬜ Not Started**

## Approval Gate
**Frontend is done when:**
- [ ] All pages exist & work
- [ ] All interactions functional
- [ ] Mock data complete
- [ ] User approves: "Good, do backend"

**Backend starts when:**
- [ ] Frontend 100% locked
- [ ] API spec defined (mock data = contract)
