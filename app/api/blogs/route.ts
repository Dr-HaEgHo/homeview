// app/api/properties/route.ts
import mysql from "mysql2/promise";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Extract filter type from query string
  const type = searchParams.get("type") || "all"; // default to "all"

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // Build query dynamically
    let query = "SELECT * FROM homeview.blogs";
    const values: any[] = [];

    // Only filter if type is not "all"
    if (type && type !== "all") {
      query += " WHERE type = ?";
      values.push(type);
    }

    const [rows] = await connection.execute(query, values);

    await connection.end();

    return Response.json({
      success: true,
      filters: { type },
      data: rows,
    });
  } catch (error: any) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
