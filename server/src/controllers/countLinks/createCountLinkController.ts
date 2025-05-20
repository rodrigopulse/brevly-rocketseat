import { db } from "@/db";
import { schema } from "@/db/schemas";
import { eq } from "drizzle-orm";

export const createCountLinkController = async (id: string) => {
  try {
    const getLink = await db
      .select({ id: schema.links.id })
      .from(schema.links)
      .where(eq(schema.links.id, id))
      .limit(1);
    if (getLink.length === 0) {
      return { status: 404, code: "NO_LINKS_FOUND", message: "No links found" };
    }
    await db.insert(schema.countLinks).values({ linkId: id });
    return { status: 200, message: "Count link created successfully" };
  } catch (error) {
    const err = error as Error;
    if (err.message.includes("ECONNREFUSED")) {
      return {
        status: 500,
        code: "SERVER_ERROR",
        message: "Internal server error",
      };
    }
    return { status: 400, code: "UNDEFINED_ERROR", message: "Undefined error" };
  }
};
