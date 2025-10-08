// app/api/properties/[id]/route.ts
import mysql from "mysql2/promise";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await context.params; // ✅ resolve the promise
    const { id } = resolvedParams;
    // const connection = await mysql.createConnection({
    //   host: "127.0.0.1",
    //   port: 3306,
    //   user: "root",
    //   password: "Secret@c0d3.",
    //   database: "homeview",
    // });

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.execute(
      "SELECT * FROM properties WHERE id = ?",
      [id]
    );

    await connection.end();

    if (!rows || (Array.isArray(rows) && rows.length === 0)) {
      return Response.json(
        { success: false, message: "Property not found" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: Array.isArray(rows) ? rows[0] : rows,
    });
  } catch (error: any) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
