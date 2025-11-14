import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "@shared/schema";

// Allow running the app in development without a database configured.
// In production a DATABASE_URL must be provided.
let pool: Pool | null = null;
let db: any = null;

if (!process.env.DATABASE_URL) {
  console.warn(
    "DATABASE_URL not set — database disabled. API routes that require the DB will fail if called.",
  );
} else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

  db = drizzle(pool, { schema });
}

export { pool, db };
