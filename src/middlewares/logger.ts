import env from "env";
import { pinoLogger } from "hono-pino";
import { pino } from "pino";
import pretty from "pino-pretty";

export const logger = pinoLogger({ pino: pino({ level: env.LOG_LEVEL }, env.NODE_ENV !== "production" ? pretty() : undefined), http: {
  reqId: () => crypto.randomUUID(),
} });
