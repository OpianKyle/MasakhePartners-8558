import { drizzle } from "drizzle-orm/mysql2";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

export const database = drizzle(databaseUrl);