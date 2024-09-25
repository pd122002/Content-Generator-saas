import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formData: varchar('formData').notNull(),
    aiResponse: varchar('aiResponse').notNull(),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('createdBy'),
    createdAt: varchar('createdAt')
})