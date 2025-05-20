import { deleteLinkController } from "@/controllers/links";
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const deleteLinkRoute = async (server: FastifyInstance) => {
  server.delete(
    "/links/:id",
    {},
    async (
      request: FastifyRequest<{
        Params: { id: string };
      }>,
      reply: FastifyReply
    ) => {
      const { id } = request.params;

      const response = await deleteLinkController(id);

      return reply.status(response.status).send(response);
    }
  );
};
