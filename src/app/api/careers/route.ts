import { NextResponse } from "next/server";
import { sendEmailWithAttachment } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const fullName = data.fullName?.trim() || "";
    const phoneNumber = data.phoneNumber?.trim() || "";
    const emailAddress = data.emailAddress?.trim() || "";
    const position = data.position?.trim() || "General IT Role";
    const location = data.location?.trim() || "Wayanad, Kerala";
    const message = data.message?.trim() || "";

    if (!fullName || !phoneNumber) {
      return NextResponse.json(
        { success: false, message: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const subject = `Job Application: ${position} - ${fullName}`;
    const text = `NEW JOB APPLICATION RECEIVED - IDEAL IT SOLUTIONS

Candidate Name: ${fullName}
Phone (WhatsApp): ${phoneNumber}
Email: ${emailAddress || "Not provided"}
Role / Position: ${position}
Location: ${location || "Wayanad, Kerala"}

Candidate Message / Skills:
${message || "Interested in joining the IDEAL IT team."}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; color: #1e293b;">
        <h2 style="color: #0066FF; margin-top: 0;">New Job Application Received</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px;">Candidate Name:</td>
            <td style="padding: 8px 0;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone (WhatsApp):</td>
            <td style="padding: 8px 0;">${phoneNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">${emailAddress || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Position / Domain:</td>
            <td style="padding: 8px 0; color: #0066FF; font-weight: bold;">${position}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Location:</td>
            <td style="padding: 8px 0;">${location || "Wayanad, Kerala"}</td>
          </tr>
        </table>
        
        <div style="background-color: #f8fafc; border-left: 4px solid #0066FF; padding: 12px; margin-top: 16px; border-radius: 4px;">
          <strong>Candidate Note / Skills:</strong>
          <p style="margin: 8px 0 0 0; color: #475569;">${message || "Interested in joining IDEAL IT team."}</p>
        </div>
      </div>
    `;

    await sendEmailWithAttachment({
      subject,
      text,
      html,
      attachments: [],
    });

    return NextResponse.json({
      success: true,
      message: "Application delivered successfully.",
      applicationId: `IDL-CAR-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error("Career application error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process application." },
      { status: 500 }
    );
  }
}
