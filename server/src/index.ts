import fastifyCors from "@fastify/cors";
import { fastify } from "fastify";

import routes from "./routes";
import { env } from "./env";

const server = fastify();

server.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "DELETE"],
});

server.register(routes);

server.get("/", async (request, reply) => {
  return { brev: "ly" };
});

server
  .listen({
    port: env.PORT,
    host: "0.0.0.0",
  })
  .then((address) => {
    console.log(`Server listening on ${address}`);
  });
