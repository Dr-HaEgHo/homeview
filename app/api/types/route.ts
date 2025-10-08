import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// Connection pool
// const pool = await mysql.createConnection({
//   host: "127.0.0.1",
//   port: 3306,
//   user: "root",
//   password: "Secret@c0d3.",
//   database: "homeview",
// });

const pool = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export async function GET() {
  try {
    const [rows]: any = await pool.query(
      `SELECT type, COUNT(*) as total 
       FROM properties 
       GROUP BY type`
    );

    // Explicit mapping
    const typeData: Record<string, number> = {
      apartments: 0,
      villas: 0,
      town_houses: 0,
      commercial: 0,
    };

    const mapping: Record<string, keyof typeof typeData> = {
      "apartments": "apartments",
      "villas": "villas",
      "Town House": "town_houses",
      "commercial": "commercial",
    };

    rows.forEach((row: any) => {
      const mappedKey = mapping[row.type];
      if (mappedKey) {
        typeData[mappedKey] = row.total;
      }
    });

    return NextResponse.json({ success: true, data: typeData });
  } catch (error: any) {
    console.error("Error fetching typeData:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch type data" },
      { status: 500 }
    );
  }
}
