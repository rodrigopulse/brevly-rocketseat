import * as upload from "./exportLinksController";
import { describe, it, expect, beforeAll } from "vitest";
import { createLink } from "@/test/factories/createLink";
import { db } from "@/db";
import { schema } from "@/db/schemas";
import csvParser from "csv-parser";
import { Readable } from "node:stream";

const options = {
  timeout: 5000,
};

describe("exportLinksController", options, () => {
  beforeAll(async () => {
    await db.delete(schema.links);
    await db.delete(schema.countLinks);
  });

  it("should export links to a CSV file", async () => {
    const link1 = await createLink();
    const link2 = await createLink();
    const link3 = await createLink();

    const result = await upload.exportLinksController();

    expect(result).toEqual({
      status: 200,
      path: expect.stringMatching(/exports\/links-\d+\.csv/),
      url: expect.stringMatching(
        new RegExp(
          `${process.env.CLOUDFLARE_PUBLIC_URL}/exports/links-\\d+\\.csv`
        )
      ),
    });

    const response = await fetch(result.url ?? "");
    expect(response.ok).toBe(true); // Verifica se o download foi bem-sucedido

    const csvData: any[] = [];
    const stream = Readable.from(await response.text());

    await new Promise<void>((resolve, reject) => {
      stream
        .pipe(csvParser())
        .on("data", (row) => csvData.push(row))
        .on("end", resolve)
        .on("error", reject);
    });

    expect(csvData).toHaveLength(3);
    expect(csvData).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: link1.id,
          count_links: "0",
          link: link1.link,
          short_link: link1.shortLink,
        }),
        expect.objectContaining({
          id: link2.id,
          count_links: "0",
          link: link2.link,
          short_link: link2.shortLink,
        }),
        expect.objectContaining({
          id: link3.id,
          count_links: "0",
          link: link3.link,
          short_link: link3.shortLink,
        }),
      ])
    );
  });
});
