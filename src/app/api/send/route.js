import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zanikhan454@gmail.com", // change to your email
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p><strong>From:</strong> {name} ({email})</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
