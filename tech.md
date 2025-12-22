# Tech Stack Reference

This file summarizes the project’s current tooling for AI-assisted IDEs and contributors.

## Package Manager

- Preferred: **pnpm** (per project rules).

## Framework & Runtime

- Framework: **Next.js 16.0.10** (App Router, React 19.2.1, React 19 features enabled).
- Rendering: Server Components by default; client components when needed.
- Analyze build: `ANALYZE=true next build` for bundle stats.

## Styling & UI

- CSS: **Tailwind CSS 4.1.18** with **tailwind-merge 3.4.0** and **tw-animate-css 1.4.0**.
- Component libs: **shadcn/ui 3.6.1**, **@base-ui/react 1.0.0**.
- Icons: **lucide-react 0.561.0**, **@iconify/react 6.0.2**.
- Animation: **motion 12.23.26**.

## Forms & Validation

- Schema validation: **zod 4.2.0**.
- Env schema: **@t3-oss/env-nextjs 0.13.10**.

## Data & Backend

- Database: **PostgreSQL via Neon** (client: `@neondatabase/serverless 1.0.2`).
- ORM: **Drizzle ORM 0.45.1** with **drizzle-kit 0.31.8** (scripts: `db:push`, `db:generate`, `db:migrate`, `db:studio`).

## Email & Communication

- Email delivery: **resend 6.6.0**.
- Email templating: **@react-email/components 1.0.1**.

## Utilities

- Class utilities: **class-variance-authority 0.7.1**, **clsx 2.1.1**.
- Date helpers: **date-fns 4.1.0**.
- Measurement: **react-use-measure 2.1.7**.
- Theming: **next-themes 0.4.6**.

## TypeScript & Tooling

- TypeScript **5.9.3**.
- Lint/format: **Biome 2.3.8** (`lint` → `biome check`, `format` → `biome format --write`).
- React Compiler: **babel-plugin-react-compiler 1.0.0**.
- Bundle analysis: **@next/bundle-analyzer 16.0.10**.
- Typings: **@types/node 20.19.27**, **@types/react 19.2.7**, **@types/react-dom 19.2.3**.

## Scripts

- `pnpm dev` → Next dev server.
- `pnpm build` → Next build.
- `pnpm start` → Next start.
- `pnpm lint` → Biome check.
- `pnpm format` → Biome format (write mode).
- `pnpm db:push` / `db:generate` / `db:migrate` / `db:studio` → Drizzle workflows.
- `pnpm analyze` → Bundle analysis build.

## AI Assistant Hints

- Prefer **pnpm** for installs.
- Use **Tailwind v4** and **shadcn/ui** for UI work; keep components in TypeScript (no `React.FC`).
- Use **Drizzle ORM** with **Neon** for data; favor server actions for mutations.
- Validate inputs with **zod**; manage env via **@t3-oss/env-nextjs**.
- Keep lint/format aligned with **Biome**.
