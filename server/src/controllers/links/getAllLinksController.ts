import { db } from "@/db";
import { schema } from "@/db/schemas";
import { env } from "@/env";
import { eq, sql } from "drizzle-orm";

export const getAllLinksController = async (page: number, limit: number) => {
  const offset = (page - 1) * limit;
  try {
    const totalCountResult = await db
      .select({ count: sql<number>`count(*)`.mapWith(Number) })
      .from(schema.links);

    const total = totalCountResult[0].count;
    const totalPages = Math.ceil(total / limit);
    const results = await db
      .select({
        id: schema.links.id,
        link: schema.links.link,
        shortLink: schema.links.shortLink,
        count: sql<number>`count(${schema.countLinks.id})`.mapWith(Number),
      })
      .from(schema.links)
      .leftJoin(
        schema.countLinks,
        eq(schema.links.id, schema.countLinks.linkId)
      )
      .groupBy(schema.links.id)
      .orderBy(sql`${schema.links.createdAt} DESC`)
      .limit(limit)
      .offset(offset);
    return {
      status: 200,
      page,
      limit,
      total,
      totalPages,
      data: results,
    };
  } catch (error) {
    const err = error as Error;
    console.log("[ERROR", err);
    if (err.message.includes("ECONNREFUSED")) {
      return {
        status: 500,
        code: "SERVER_ERROR",
        message: "Internal server error",
        env: env.POSTGRES_DB,
      };
    }
    return { status: 400, code: "UNDEFINED_ERROR", message: "Undefined error" };
  }
};
