import { createRoute, z } from "@hono/zod-openapi";
import * as httpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";

import { createRouter } from "@/lib/create-app";

const router = createRouter();

router.openapi(createRoute({ tags: ["index"], method: "get", path: "/", responses: {
  [httpStatusCodes.OK]: jsonContent(z.object({
    message: z.string(),
  }), "Tasks API index"),
} }), (c) => {
  return c.json({ message: "This is the tasks API" });
});

export default router;
