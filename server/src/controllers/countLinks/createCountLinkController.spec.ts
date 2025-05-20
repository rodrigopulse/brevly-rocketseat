import { beforeEach, describe, expect, it } from "vitest";
import { createLink } from "@/test/factories/createLink";
import { createCountLinkController } from "./createCountLinkController";
import { db } from "@/db";
import { schema } from "@/db/schemas";

describe.sequential("createCountLinkController", () => {
  beforeEach(async () => {
    await db.delete(schema.links);
    await db.delete(schema.countLinks);
  });

  it("should create count link", async () => {
    const link = await createLink();
    const result = await createCountLinkController(link.id);
    expect(result).toEqual({
      status: 200,
      message: "Count link created successfully",
    });
  });

  it("should return a 404", async () => {
    const result = await createCountLinkController("anything");
    expect(result).toEqual({
      status: 404,
      code: "NO_LINKS_FOUND",
      message: "No links found",
    });
  });
});
