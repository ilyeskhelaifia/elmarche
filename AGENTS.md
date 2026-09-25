# AI Agent Rules — El Marché

## Project context

- Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Supabase
- Team of 7 developers using OpenCode as primary coding agent

## Code rules

- Use TypeScript everywhere. No `any` unless justified.
- Use functional components and React hooks.
- Use shadcn/ui components for all UI.
- Never write raw CSS. Use Tailwind classes only.
- All Supabase calls go through `/src/lib/supabase/`.
- All API routes live in `/src/app/api/`.
- File names: kebab-case (`product-card.tsx`).
- Component names: PascalCase (`ProductCard`).

## Commit rules

- Small, focused commits.
- Format: `type(scope): message` (e.g., `feat(auth): add login page`)
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Agent rules

- Always read existing code before modifying it.
- Never push directly to main. Work on a branch.
- Explain what you're changing before making large edits.
- If unsure, ask the developer — don't guess.
