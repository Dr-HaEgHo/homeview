// app/api/properties/[id]/route.ts
import mysql from "mysql2/promise";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const connection = await mysql.createConnection({
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "Secret@c0d3.",
      database: "homeview",
    });

    const [rows] = await connection.execute(
      "SELECT * FROM properties WHERE id = ?",
      [params.id]
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
