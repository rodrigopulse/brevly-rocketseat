import { getAllLinksController } from "@/controllers/links/";
import type { FastifyInstance } from "fastify";

export const getAllLinksRoute = async (server: FastifyInstance) => {
  server.get(
    "/links",
    {
      schema: {
        querystring: {
          type: "object",
          properties: {
            page: { type: "integer", minimum: 1, default: 1 },
            limit: { type: "integer", minimum: 1, maximum: 100, default: 10 },
          },
        },
      },
    },
    async (request, reply) => {
      const { page, limit } = request.query as { page: number; limit: number };

      const response = await getAllLinksController(page, limit);

      return reply.status(response.status).send(response);
    }
  );
};
