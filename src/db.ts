import { drizzle } from 'drizzle-orm/better-sqlite3';
import config from './utils/config.ts';

// You can specify any property from the libsql connection options
export const db = drizzle({ connection: { source: config.databaseFileName }});
