import type { FastifyInstance } from "fastify";
import { createLinkRoute } from "./createLinkRoute";
import { deleteLinkRoute } from "./deleteLinkRoute";
import { getAllLinksRoute } from "./getAllLinksRoute";
import { getLinkRoute } from "./getLinkRoute";
import { exportLinksRoute } from "./exportLinksRoute";

export default function links(server: FastifyInstance) {
  server.register(createLinkRoute);
  server.register(deleteLinkRoute);
  server.register(exportLinksRoute);
  server.register(getAllLinksRoute);
  server.register(getLinkRoute);
}
