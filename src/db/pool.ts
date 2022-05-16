import { Pool } from 'pg';
// create a new pool connection using the PGURI environment variable

export const pool = new Pool({
    connectionString: process.env.PGURI,
});