import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/api/database/schema.ts',
  out: './src/api/migrations',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
