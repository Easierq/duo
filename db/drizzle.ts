import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import * as schema from "../db/schema";

const sql = postgres(process.env.DATABASE_URL!);
// const sql = neon("postgres://postgres:1234@localhost:5432/langling");
const db = drizzle(sql, { schema });

export default db;
