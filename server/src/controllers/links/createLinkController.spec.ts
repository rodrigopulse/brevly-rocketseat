import { createLinkController } from "@/controllers/links/createLinkController";
import { db } from "@/db";
import { schema } from "@/db/schemas";
import { beforeAll, describe, expect, it } from "vitest";

describe.sequential("createLinkController", () => {
  beforeAll(async () => {
    await db.delete(schema.links);
    await db.delete(schema.countLinks);
  });

  it("should create a link", async () => {
    const link = await createLinkController(
      "https://example.com",
      "test-create"
    );
    expect(link).toEqual({
      status: 200,
      data: {
        id: expect.any(String),
        link: "https://example.com",
        shortLink: "test-create",
      },
    });
  });

  it("expect error response when link already exists", async () => {
    const link = await createLinkController(
      "https://example.com",
      "test-create"
    );
    expect(link).toEqual({
      status: 400,
      code: "SHORT_LINK_ALREADY_EXISTS",
      message: "Short Link already exists",
    });
  });
});
