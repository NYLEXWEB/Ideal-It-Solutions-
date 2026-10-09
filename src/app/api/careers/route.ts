import { NextResponse } from "next/server";
import { sendEmailWithAttachment } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    let fullName = "";
    let phoneNumber = "";
    let emailAddress = "";
    let position = "";
    let location = "";
    let message = "";
    let resumeFile: File | null = null;

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      fullName = (formData.get("fullName") as string) || "";
      phoneNumber = (formData.get("phoneNumber") as string) || "";
      emailAddress = (formData.get("emailAddress") as string) || "";
      position = (formData.get("position") as string) || "General IT Role";
      location = (formData.get("location") as string) || "Wayanad, Kerala";
      message = (formData.get("message") as string) || "";
      resumeFile = formData.get("resume") as File | null;
    } else {
      const data = await req.json();
      fullName = data.fullName || "";
      phoneNumber = data.phoneNumber || "";
      emailAddress = data.emailAddress || "";
      position = data.position || "General IT Role";
      location = data.location || "Wayanad, Kerala";
      message = data.message || "";
    }

    if (!fullName || !phoneNumber) {
      return NextResponse.json(
        { success: false, message: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];

    if (resumeFile && typeof resumeFile.arrayBuffer === "function") {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: resumeFile.name || "Candidate_Resume.pdf",
        content: buffer,
        contentType: resumeFile.type || "application/pdf",
      });
    }

    const subject = `Job Application: ${position} - ${fullName}`;
    const text = `NEW JOB APPLICATION RECEIVED - IDEAL IT SOLUTIONS

Candidate Name: ${fullName}
Phone (WhatsApp): ${phoneNumber}
Email: ${emailAddress || "Not provided"}
Role / Position: ${position}
Location: ${location || "Wayanad, Kerala"}
Attached Resume: ${resumeFile ? resumeFile.name : "None (Resume was optional)"}

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
            <td style="padding: 8px 0; font-weight: bold;">Position:</td>
            <td style="padding: 8px 0; color: #0066FF; font-weight: bold;">${position}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Location:</td>
            <td style="padding: 8px 0;">${location || "Wayanad, Kerala"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Resume File:</td>
            <td style="padding: 8px 0;">${resumeFile ? `📎 ${resumeFile.name} (Attached)` : "None (Optional)"}</td>
          </tr>
        </table>
        
        <div style="background-color: #f8fafc; border-left: 4px solid #0066FF; padding: 12px; margin-top: 16px; border-radius: 4px;">
          <strong>Candidate Note / Skills:</strong>
          <p style="margin: 8px 0 0 0; color: #475569;">${message || "Interested in joining IDEAL IT."}</p>
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
