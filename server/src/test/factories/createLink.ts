import { db } from "@/db";
import { schema } from "@/db/schemas";
import { fakerPT_BR as faker } from "@faker-js/faker";

export const createLink = async () => {
  const result = await db
    .insert(schema.links)
    .values({
      link: "https://example.com",
      shortLink: faker.string.uuid(),
    })
    .returning({
      id: schema.links.id,
      link: schema.links.link,
      shortLink: schema.links.shortLink,
    });
  return result[0];
};
