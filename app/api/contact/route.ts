import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '[loaded]' : '[missing]');

    const transporter = nodemailer.createTransport({
      host: 'mail.klikkfix.com',
      port: 465,              // eller 587 hvis du heller vil bruke TLS
      secure: true,           // true = SSL på port 465
      auth: {
        user: 'support@klikkfix.com',
        pass: process.env.EMAIL_PASSWORD, // legg inn i .env
      },
    });

    await transporter.sendMail({
      from: `"KlikkFix Contact" <support@klikkfix.com>`,
      to: 'support@klikkfix.com', // Du kan også sende til en annen mottaker hvis ønskelig
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ error: 'Something went wrong. Try again later.' }, { status: 500 });
  }
}
