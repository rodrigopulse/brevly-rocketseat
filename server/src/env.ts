import { z } from "zod";
const envSchema = z.object({
  APP_PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  POSTGRES_USER: z.string().default("postgres"),
  POSTGRES_PASSWORD: z.string().default("postgres"),
  POSTGRES_DB: z.string().default("brevly"),
  POSTGRES_HOST: z.string().default("localhost"),
  POSTGRES_PORT: z.coerce.number().default(5432),
  CLOUDFLARE_ACCESS_KEY: z.string(),
  CLOUDFLARE_SECRET_KEY: z.string(),
  CLOUDFLARE_END_POINT: z
    .string()
    .url()
    .startsWith("https://")
    .default(
      "https://72f0e641e81b0855ec6d8d1bf29f6057.r2.cloudflarestorage.com"
    ),
  CLOUDFLARE_BUCKET: z.string().default("brevly"),
  CLOUDFLARE_PUBLIC_URL: z
    .string()
    .url()
    .startsWith("https")
    .default("https://pub-4579d7850f6e4a06a02c4014e9b35a94.r2.dev"),
});
export const env = envSchema.parse(process.env);
