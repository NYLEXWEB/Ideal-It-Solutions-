import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file provided." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename and add unique timestamp prefix
    const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const uniqueFileName = `${Date.now()}_${cleanName}`;

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadsDir, { recursive: true });

    const filePath = path.join(uploadsDir, uniqueFileName);
    await writeFile(filePath, buffer);

    const relativeUrl = `/uploads/${uniqueFileName}`;

    return NextResponse.json({
      success: true,
      fileName: file.name,
      fileUrl: relativeUrl,
      sizeBytes: file.size,
    });
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to upload file." },
      { status: 500 }
    );
  }
}
