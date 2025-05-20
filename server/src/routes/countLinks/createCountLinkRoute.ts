import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { createCountLinkController } from "@/controllers/countLinks";

export const createCountLinkRoute = async (server: FastifyInstance) => {
  server.post(
    "/count-links",
    {},
    async (
      request: FastifyRequest<{
        Body: { id: string };
      }>,
      reply: FastifyReply
    ) => {
      const { id } = request.body;

      const response = await createCountLinkController(id);

      return reply.status(response.status).send(response);
    }
  );
};
