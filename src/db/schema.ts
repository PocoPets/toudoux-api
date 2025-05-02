import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable("users", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    password: text().notNull(),
    email: text().notNull().unique(),
});

export const toudouxTable = sqliteTable('toudoux', {
    id: int().primaryKey({ autoIncrement: true }),
    title: text(),
    description: text(),
})
