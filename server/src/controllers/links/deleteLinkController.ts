import { db } from "@/db";
import { schema } from "@/db/schemas";
import { eq } from "drizzle-orm";

export const deleteLinkController = async (linkId: string) => {
  try {
    const response = await db
      .delete(schema.links)
      .where(eq(schema.links.id, linkId))
      .returning({ id: schema.links.id });
    if (response.length === 0) {
      return {
        status: 404,
        code: "NO_LINK_FOUND",
        message: "No link found",
      };
    }
    return {
      status: 200,
      message: "Link deleted successfully",
      id: response[0].id,
    };
  } catch (error) {
    const err = error as Error;
    if (err.message.includes("ECONNREFUSED")) {
      return {
        status: 500,
        code: "SERVER_ERROR",
        message: "Internal server error",
      };
    }
    return {
      status: 400,
      code: "UNDEFINED_ERROR",
      message: "Undefined error",
      debug: err,
    };
  }
};
