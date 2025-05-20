import {
  exportLinksController,
  getAllLinksController,
} from "@/controllers/links/";
import type { FastifyInstance } from "fastify";

export const exportLinksRoute = async (server: FastifyInstance) => {
  server.get("/links/export", {}, async (request, reply) => {
    const response = await exportLinksController();

    return reply.status(response.status).send(response);
  });
};
