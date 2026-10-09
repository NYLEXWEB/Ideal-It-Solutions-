import { NextResponse } from "next/server";
import { sendEmailWithAttachment } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    let fullName = "";
    let phoneNumber = "";
    let emailAddress = "";
    let productBrand = "";
    let productModel = "";
    let serialNumber = "";
    let purchaseDate = "";
    let issueDescription = "";
    let invoiceFile: File | null = null;

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      fullName = (formData.get("fullName") as string) || "";
      phoneNumber = (formData.get("phoneNumber") as string) || "";
      emailAddress = (formData.get("emailAddress") as string) || "";
      productBrand = (formData.get("productBrand") as string) || "Hardware";
      productModel = (formData.get("productModel") as string) || "";
      serialNumber = (formData.get("serialNumber") as string) || "";
      purchaseDate = (formData.get("purchaseDate") as string) || "";
      issueDescription = (formData.get("issueDescription") as string) || "";
      invoiceFile = formData.get("invoice") as File | null;
    } else {
      const data = await req.json();
      fullName = data.fullName || "";
      phoneNumber = data.phoneNumber || "";
      emailAddress = data.emailAddress || "";
      productBrand = data.productBrand || "Hardware";
      productModel = data.productModel || "";
      serialNumber = data.serialNumber || "";
      purchaseDate = data.purchaseDate || "";
      issueDescription = data.issueDescription || "";
    }

    if (!fullName || !phoneNumber) {
      return NextResponse.json(
        { success: false, message: "Customer Name and Phone number are required." },
        { status: 400 }
      );
    }

    const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];

    if (invoiceFile && typeof invoiceFile.arrayBuffer === "function") {
      const bytes = await invoiceFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: invoiceFile.name || "Warranty_Invoice_Photo.jpg",
        content: buffer,
        contentType: invoiceFile.type || "image/jpeg",
      });
    }

    const subject = `Warranty Claim: ${productBrand} ${productModel} - ${fullName}`;
    const text = `NEW WARRANTY SERVICE CLAIM - IDEAL IT SOLUTIONS

Customer Name: ${fullName}
Phone Number: ${phoneNumber}
Email Address: ${emailAddress || "Not provided"}

Product Brand: ${productBrand}
Product Model / Serial: ${productModel} ${serialNumber ? `(SN: ${serialNumber})` : ""}
Purchase Date: ${purchaseDate || "Not provided"}

Reported Issue / Defect:
${issueDescription}

Attached Invoice/Photo: ${invoiceFile ? invoiceFile.name : "None"}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; color: #1e293b;">
        <h2 style="color: #0066FF; margin-top: 0;">New Warranty Claim Registered</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px;">Customer Name:</td>
            <td style="padding: 8px 0;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px 0;">${phoneNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">${emailAddress || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Product:</td>
            <td style="padding: 8px 0; color: #0066FF; font-weight: bold;">${productBrand} ${productModel}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Purchase Date:</td>
            <td style="padding: 8px 0;">${purchaseDate || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Attached Photo/Bill:</td>
            <td style="padding: 8px 0;">${invoiceFile ? `📎 ${invoiceFile.name} (Attached)` : "None"}</td>
          </tr>
        </table>
        
        <div style="background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 12px; margin-top: 16px; border-radius: 4px;">
          <strong>Issue / Defect Description:</strong>
          <p style="margin: 8px 0 0 0; color: #991b1b;">${issueDescription}</p>
        </div>
      </div>
    `;

    await sendEmailWithAttachment({
      subject,
      text,
      html,
      attachments,
    });

    return NextResponse.json({
      success: true,
      message: "Warranty claim registered successfully.",
      claimId: `WRN-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error("Warranty claim error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process warranty claim." },
      { status: 500 }
    );
  }
}
