// app/api/properties/route.ts
import mysql from "mysql2/promise";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Extract filters from query string
  const city = searchParams.get("city");
  const type = searchParams.get("type");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const bedrooms = searchParams.get("bedrooms");
  const listing = searchParams.get("listing");
  const garages = searchParams.get("garages"); // plural for flexibility

  try {
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

    // Build WHERE clause dynamically
    const conditions: string[] = [];
    const values: any[] = [];

    if (city) {
      conditions.push("city = ?");
      values.push(city);
    }
    if (type) {
      conditions.push("type = ?");
      values.push(type);
    }
    if (minPrice) {
      conditions.push("price >= ?");
      values.push(Number(minPrice));
    }
    if (maxPrice) {
      conditions.push("price <= ?");
      values.push(Number(maxPrice));
    }
    if (bedrooms) {
      conditions.push("bedrooms = ?");
      values.push(Number(bedrooms));
    }
    if (listing) {
      conditions.push("listing LIKE ?");
      values.push(`%${listing}%`);
    }
    if (garages) {
      conditions.push("garage = ?");
      values.push(Number(garages));
    }

    const whereClause =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const [rows] = await connection.execute(
      `SELECT * FROM homeview.properties ${whereClause}`,
      values
    );

    await connection.end();

    return Response.json({
      success: true,
      filters: Object.fromEntries(searchParams),
      data: rows,
    });
  } catch (error: any) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
