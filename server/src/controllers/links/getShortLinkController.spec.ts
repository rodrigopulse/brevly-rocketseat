import { beforeAll, describe, expect, it } from "vitest";
import { createLink } from "@/test/factories/createLink";
import { getShortLinkController } from "./getShortLinkController";
import { db } from "@/db";
import { schema } from "@/db/schemas";

describe.sequential("getShortLinkController", () => {
  beforeAll(async () => {
    await db.delete(schema.links);
    await db.delete(schema.countLinks);
  });

  it("should get short link", async () => {
    const link = await createLink();
    const result = await getShortLinkController(link.shortLink);
    expect(result).toEqual({
      status: 200,
      data: {
        createdAt: expect.any(Date),
        id: expect.any(String),
        link: "https://example.com",
        shortLink: link.shortLink,
      },
    });
  });

  it("should return a 404", async () => {
    const result = await getShortLinkController("anything");
    expect(result).toEqual({
      status: 404,
      code: "NO_LINKS_FOUND",
      message: "No links found",
    });
  });
});
