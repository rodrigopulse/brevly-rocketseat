import { z } from "zod";
const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DATABASE_URL: z.string().startsWith("postgresql://"),
  CLOUDFLARE_ACCESS_KEY_ID: z.string(),
  CLOUDFLARE_SECRET_ACCESS_KEY: z.string(),
  CLOUDFLARE_ACCOUNT_ID: z.string(),
  CLOUDFLARE_BUCKET: z.string().default("brevly"),
  CLOUDFLARE_PUBLIC_URL: z
    .string()
    .url()
    .startsWith("https")
    .default("https://pub-4579d7850f6e4a06a02c4014e9b35a94.r2.dev"),
});
export const env = envSchema.parse(process.env);
