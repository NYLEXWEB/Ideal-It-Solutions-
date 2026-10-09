import nodemailer from "nodemailer";

const TARGET_EMAIL = process.env.CONTACT_EMAIL || "idealcomputersmntdy@gmail.com";

export async function sendEmailWithAttachment({
  to = TARGET_EMAIL,
  subject,
  html,
  text,
  attachments = [],
}: {
  to?: string;
  subject: string;
  html: string;
  text: string;
  attachments?: Array<{
    filename: string;
    content: Buffer;
    contentType?: string;
  }>;
}) {
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;

  if (smtpUser && smtpPass) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    return await transporter.sendMail({
      from: `"IDEAL IT Solutions Web" <${smtpUser}>`,
      to,
      subject,
      text,
      html,
      attachments,
    });
  } else {
    // If SMTP credentials are not yet set in .env.local, log the incoming attachment details
    console.log("=================================================");
    console.log(`[EMAIL DISPATCH] To: ${to}`);
    console.log(`[EMAIL DISPATCH] Subject: ${subject}`);
    console.log(`[EMAIL DISPATCH] Text: \n${text}`);
    if (attachments.length > 0) {
      console.log(
        `[EMAIL DISPATCH] Attached Physical Files (${attachments.length}):`,
        attachments.map((a) => `${a.filename} (${a.content.length} bytes)`)
      );
    }
    console.log("=================================================");
    return { success: true, mocked: true };
  }
}
