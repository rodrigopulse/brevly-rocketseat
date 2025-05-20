import type { FastifyInstance } from "fastify";
import { createCountLinkRoute } from "./createCountLinkRoute";
export default function countLinks(server: FastifyInstance) {
  server.register(createCountLinkRoute);
}
