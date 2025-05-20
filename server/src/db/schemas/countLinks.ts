import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";

export const countLinks = pgTable("count_links", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  linkId: text("link_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
