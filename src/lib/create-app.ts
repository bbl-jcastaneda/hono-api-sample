import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { defaultHook } from "stoker/openapi";

import { logger } from "@/middlewares/logger";

import type { AppBindings } from "./types";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({ strict: false, defaultHook });
}

export default function createApp() {
  const app = new OpenAPIHono<AppBindings>({ strict: false });
  app.use(serveEmojiFavicon("📃"));
  app.use(logger);

  app.notFound(notFound);
  app.onError(onError);
  return app;
}
