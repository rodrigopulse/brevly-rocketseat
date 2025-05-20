import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { createLinkController } from "@/controllers/links";
import { isValidShortLink, isValidLink } from "@/utils/validations/";

export const createLinkRoute = async (server: FastifyInstance) => {
  server.post(
    "/links",
    {},
    async (
      request: FastifyRequest<{
        Body: { link: string; shortLink: string };
      }>,
      reply: FastifyReply
    ) => {
      const { link, shortLink } = request.body;

      const validateUrl = isValidLink(link);
      if (validateUrl !== true) {
        return reply.status(400).send(validateUrl);
      }

      const validateShortUrl = isValidShortLink(shortLink);
      if (validateShortUrl !== true) {
        return reply.status(400).send(validateShortUrl);
      }

      const response = await createLinkController(link, shortLink);

      return reply.status(response.status).send(response);
    }
  );
};
