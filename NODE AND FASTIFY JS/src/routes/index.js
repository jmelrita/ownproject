import fastifyMultipart from "@fastify/multipart";
import { V1 } from "./v1/index.js";
import { RESOURCE } from "../constants/index.js";

const ROUTES = [...V1];

export const addRoutes = (app) => {
  app.register(fastifyMultipart);
  ROUTES.forEach((route) => {
    app.register(route.route, { prefix: `${RESOURCE.API}${route.url}` });
  });
};
