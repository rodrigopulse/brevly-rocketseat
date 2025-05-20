import { db } from "@/db";
import { schema } from "@/db/schemas";
import { eq } from "drizzle-orm";

export const getShortLinkController = async (shortLink: string) => {
  try {
    const response = await db
      .select({
        id: schema.links.id,
        link: schema.links.link,
        shortLink: schema.links.shortLink,
        createdAt: schema.links.createdAt,
      })
      .from(schema.links)
      .where(eq(schema.links.shortLink, shortLink))
      .limit(1);
    if (response.length === 0) {
      return {
        status: 404,
        code: "NO_LINKS_FOUND",
        message: "No links found",
      };
    }
    return { status: 200, data: response[0] };
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
