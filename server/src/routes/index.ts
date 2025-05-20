import type { FastifyInstance } from "fastify";

export default function routes(server: FastifyInstance) {
  server.register(import("./links"));
  server.register(import("./countLinks"));
}
