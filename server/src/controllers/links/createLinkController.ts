import { db } from "@/db";
import { schema } from "@/db/schemas";
import "dotenv/config";

export const createLinkController = async (link: string, shortLink: string) => {
  try {
    const [{ id }] = await db
      .insert(schema.links)
      .values({ link, shortLink })
      .returning({ id: schema.links.id });

    return { status: 200, data: { id, link, shortLink } };
  } catch (error) {
    const err = error as Error;

    if (err.message.includes("unique constraint")) {
      if (err.message.includes("short_link")) {
        return {
          status: 400,
          code: "SHORT_LINK_ALREADY_EXISTS",
          message: "Short Link already exists",
        };
      }
    }
    if (err.message.includes("ECONNREFUSED")) {
      return {
        status: 500,
        code: "SERVER_ERROR",
        message: "Internal server error",
      };
    }
    console.log("Log...", err);
    return {
      status: 400,
      code: "UNDEFINED_ERROR",
      message: "Undefined error",
      debug: err,
    };
  }
};
