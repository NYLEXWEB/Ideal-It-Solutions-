import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ notFound: true }, { status: 404 });
}
