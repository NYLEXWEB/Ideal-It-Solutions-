import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("-----------------------------------------");
    console.log("NEW QUOTE REQUEST RECEIVED:");
    console.log(`Name: ${data.name}`);
    console.log(`Phone: ${data.phone}`);
    console.log(`Email: ${data.email || "N/A"}`);
    console.log(`Service: ${data.service}`);
    console.log(`Details: ${data.requirements || "N/A"}`);
    console.log("-----------------------------------------");

    return NextResponse.json({
      success: true,
      message: "Quote request registered successfully.",
      quoteId: `QT-${Date.now().toString().slice(-6)}`,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request payload." },
      { status: 400 }
    );
  }
}
