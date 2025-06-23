
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Simple table to track page visits (optional for future analytics)
export const pageVisitsTable = pgTable('page_visits', {
  id: serial('id').primaryKey(),
  page_path: text('page_path').notNull(),
  visited_at: timestamp('visited_at').defaultNow().notNull(),
});

// TypeScript types for the table schema
export type PageVisit = typeof pageVisitsTable.$inferSelect;
export type NewPageVisit = typeof pageVisitsTable.$inferInsert;

// Export all tables for proper query building
export const tables = { pageVisits: pageVisitsTable };
