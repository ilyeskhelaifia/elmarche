import { NextResponse } from "next/server";

// Liveness probe for deployment platforms and monitoring.
export function GET() {
  return NextResponse.json({ status: "ok" });
}
