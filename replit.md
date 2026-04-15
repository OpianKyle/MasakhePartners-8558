# Masakhe Partners

A web application platform for South African entrepreneurs, combining an SMME (Small, Medium, and Micro Enterprises) software product with a reseller/MLM network opportunity.

## Tech Stack

- **Frontend**: React 19 + Vite 7, Tailwind CSS v4, Shadcn/UI, Wouter routing
- **Backend**: Hono (API routes), designed for Cloudflare Workers
- **Database**: Cloudflare D1 (SQLite) + Drizzle ORM
- **Auth**: Better Auth
- **Package Manager**: Bun

## Project Structure

- `src/web/` — React frontend (pages, components, styles)
- `src/api/` — Hono backend API routes
- `public/` — Static assets and brand images
- `vite/` — Custom Vite plugins

## Development

```bash
bun run dev   # Start dev server on port 5000
```

## Notes

- Cloudflare Vite plugin removed to allow dev server to run in Replit environment
- Dev server runs on `0.0.0.0:5000` with all hosts allowed (required for Replit proxy)
- Bun cache directory excluded from Vite file watcher to avoid EMFILE errors
