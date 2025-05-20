import { db } from "@/db";
import { schema } from "@/db/schemas";

export const createCountLink = async (linkId: string) => {
  const result = await db
    .insert(schema.countLinks)
    .values({ linkId })
    .returning();
  return result[0];
};
