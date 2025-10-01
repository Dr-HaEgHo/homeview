// lib/db.ts
import mysql from "mysql2/promise";

export async function query(sql: string, params?: any[]) {
  const connection = await mysql.createConnection(process.env.DATABASE_URL!);
  const [results] = await connection.execute(sql, params);
  await connection.end();
  return results;
}
