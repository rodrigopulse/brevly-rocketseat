import { beforeAll, describe, expect, it } from "vitest";
import { deleteLinkController } from "./deleteLinkController";
import { createLink } from "@/test/factories/createLink";
import { db } from "@/db";
import { schema } from "@/db/schemas";

describe.sequential("deleteLinkController", () => {
  beforeAll(async () => {
    await db.delete(schema.links);
    await db.delete(schema.countLinks);
  });

  it("should delete a link", async () => {
    const link = await createLink();
    const result = await deleteLinkController(link.id);
    expect(result).toEqual({
      status: 200,
      message: "Link deleted successfully",
      id: link.id,
    });
  });

  it("should returns 404 when not found", async () => {
    const nonExisting = await deleteLinkController("non-existing-id");
    expect(nonExisting).toEqual({
      status: 404,
      code: "NO_LINK_FOUND",
      message: "No link found",
    });
  });
});
