import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { success: false, message: "File upload endpoint is disabled." },
    { status: 404 }
  );
}
