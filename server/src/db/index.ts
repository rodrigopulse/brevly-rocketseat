import { env } from "@/env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { schema } from "./schemas";

const connection = env.DATABASE_URL;
console.log("Connecting to PostgreSQL database...", connection);
export const pg = postgres(connection);
export const db = drizzle(pg, { schema });
