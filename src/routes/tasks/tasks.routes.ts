import { createRoute, z } from "@hono/zod-openapi";
import * as httpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";

const tags = ["Tasks"];

export const list = createRoute({ method: "get", path: "/tasks", tags, responses: { [httpStatusCodes.OK]: jsonContent(z.array(z.object({ name: z.string(), done: z.boolean() })), "The list of tasks") } });

export type ListRoute = typeof list;
