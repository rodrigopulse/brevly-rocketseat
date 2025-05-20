import { getShortLinkController } from "@/controllers/links";
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const getLinkRoute = async (server: FastifyInstance) => {
  server.get(
    "/links/shortlink/:shortLink",
    {},
    async (
      request: FastifyRequest<{
        Params: { shortLink: string };
      }>,
      reply: FastifyReply
    ) => {
      const { shortLink } = request.params as { shortLink: string };

      const response = await getShortLinkController(shortLink);

      return reply.status(response.status).send(response);
    }
  );
};
