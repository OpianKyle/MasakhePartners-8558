# Masakhe Partners

A web application platform for South African entrepreneurs, combining an SMME (Small, Medium, and Micro Enterprises) software product with a reseller/MLM network opportunity.

## Tech Stack

- **Frontend**: React 19 + Vite 7, Tailwind CSS v4, Shadcn/UI, Wouter routing
- **Backend**: Hono (API routes via `src/api/`)
- **Database**: MySQL (Xneelo) via Drizzle ORM + mysql2 driver
- **Auth**: Better Auth
- **Package Manager**: Bun

## Project Structure

- `src/web/` — React frontend (pages, components, styles)
- `src/api/` — Hono backend API routes
- `src/api/database/index.ts` — DB connection (uses `DATABASE_URL` env var)
- `src/api/database/schema.ts` — Drizzle schema (mysql-core)
- `public/` — Static assets and brand images
- `vite/` — Custom Vite plugins

## Development

```bash
bun run dev          # Start dev server on port 5000
bun run db:generate  # Generate migration files from schema changes
bun run db:studio    # Open Drizzle Studio for DB inspection
```

## Database

- Dialect: **MySQL** (Xneelo hosted)
- Connection: uses `DATABASE_URL` secret (format: `mysql://user:pass@host:3306/dbname`)
- ORM: Drizzle ORM with `drizzle-orm/mysql2`
- Schema file: `src/api/database/schema.ts`
- Config: `drizzle.config.ts`

## Notes

- Cloudflare Vite plugin removed to allow dev server to run in Replit environment
- Dev server runs on `0.0.0.0:5000` with all hosts allowed (required for Replit proxy)
- `.local` and `.cache` directories excluded from Vite file watcher to prevent spurious reloads
