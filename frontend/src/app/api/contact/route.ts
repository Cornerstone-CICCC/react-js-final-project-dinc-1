import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, contact, address, message } = await req.json();

  const transporter = nodemailer.createTransport({
    // port: 587,
    // host: 'smtp.gmail.com',
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `<div><p>${message}</p><p>From: ${name} (${email})</p><p>Contact: ${contact}</p><p>${address}</p></div>`,
      replyTo: email,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
