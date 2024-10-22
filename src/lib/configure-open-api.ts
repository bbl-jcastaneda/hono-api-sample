import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenApi } from "./types";

import packageJSON from "../../package.json";

export default function configureOpenAPI(app: AppOpenApi) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      title: "Tasks API",
      version: packageJSON.version,
    },
  });

  app.get("/reference", apiReference({
    theme: "bluePlanet",
    spec: {
      url: "/doc",
    },
  }));
}
