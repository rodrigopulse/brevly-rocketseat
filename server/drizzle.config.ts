import { env } from "@/env";
import type { Config } from "drizzle-kit";
export default {
  dbCredentials: {
    url: `postgresql://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@${env.POSTGRES_HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_DB}`,
  },
  dialect: "postgresql",
  schema: "src/db/schemas/*",
  out: "src/db/migrations",
} satisfies Config;
