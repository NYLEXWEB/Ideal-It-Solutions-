import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Log the received warranty claim for internal processing
    console.log("-----------------------------------------");
    console.log("NEW WARRANTY CLAIM RECEIVED:");
    console.log(`Customer Name: ${data.fullName}`);
    console.log(`Phone: ${data.phoneNumber}`);
    console.log(`Email: ${data.emailAddress}`);
    console.log(`Brand: ${data.productBrand}`);
    console.log(`Model: ${data.productModel}`);
    console.log(`Purchase Date: ${data.purchaseDate}`);
    console.log(`Issue: ${data.issueDescription}`);
    console.log(`Uploaded Invoice/Photo: ${data.invoiceFile || "None"}`);
    console.log("-----------------------------------------");

    return NextResponse.json({
      success: true,
      message: "Warranty claim registered successfully.",
      claimId: `WRN-${Date.now().toString().slice(-6)}`,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request payload." },
      { status: 400 }
    );
  }
}
