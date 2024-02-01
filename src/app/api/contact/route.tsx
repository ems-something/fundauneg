import { NextRequest, NextResponse } from "next/server";

import { render } from "@react-email/components";

import { transporter, smtpEmail } from "@/utils/nodemailer";

import { Email } from "@/components/contact/email";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, lastname, email, phone, message } = body;

  const emailHtml = render(
    <Email
      name={name}
      lastaname={lastname}
      email={email}
      phone={phone}
      message={message}
    />
  );

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "FundaUneg",
    html: emailHtml,
  };

  try {
    // Send email using the transporter
    await transporter.sendMail(options);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
  return new Response("OK");
}
