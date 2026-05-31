export const runtime = "edge";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const { error } = await resend.emails.send({
      from: "Alda's Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_TO as string,
      subject,
      replyTo: email,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;          
        ">
            <strong>Name:</strong> ${name}<br />
            <strong>Email:</strong> ${email}

          <div style="
            white-space: pre-wrap;
          ">
${message}
          </div>
        </div>
      `,
    });

    if (error) throw error;

    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return Response.json({ message: "Failed to send email" }, { status: 500 });
  }
}
