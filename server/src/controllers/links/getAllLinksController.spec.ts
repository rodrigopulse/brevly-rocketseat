import { beforeEach, describe, expect, it } from "vitest";
import { createLink } from "@/test/factories/createLink";
import { getAllLinksController } from "./getAllLinksController";
import { createCountLink } from "@/test/factories/createCountLink";
import { db } from "@/db";
import { schema } from "@/db/schemas";

describe.sequential("getAllLinksController", () => {
  beforeEach(async () => {
    await db.delete(schema.links);
    await db.delete(schema.countLinks);
    const link1 = await createLink();
    const link2 = await createLink();
    await createCountLink(link1.id);
    console.log("BeforeEach", link1, link2);
  });

  it("should get all links with pagination", async () => {
    const getLinks = await db
      .select({
        id: schema.links.id,
        link: schema.links.link,
        shortLink: schema.links.shortLink,
        createdAt: schema.links.createdAt,
      })
      .from(schema.links);
    console.log("Links in DB", getLinks);

    const resultPage1 = await getAllLinksController(1, 1);
    const resultPage2 = await getAllLinksController(2, 1);

    expect(resultPage1).toEqual({
      status: 200,
      data: [
        {
          count: 0,
          id: expect.any(String),
          link: "https://example.com",
          shortLink: expect.any(String),
        },
      ],
      limit: 1,
      page: 1,
      total: 2,
      totalPages: 2,
    });
    expect(resultPage2).toEqual({
      status: 200,
      data: [
        {
          count: 1,
          id: expect.any(String),
          link: "https://example.com",
          shortLink: expect.any(String),
        },
      ],
      limit: 1,
      page: 2,
      total: 2,
      totalPages: 2,
    });
  });
});
