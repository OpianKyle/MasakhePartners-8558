import { Hono } from 'hono';
import { cors } from 'hono/cors';
import nodemailer from 'nodemailer';

const app = new Hono().basePath('/api');

app.use('*', cors({ origin: '*' }));

app.get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }));

app.post('/contact', async (c) => {
  try {
    const { name, email, subject, message } = await c.req.json();

    if (!name || !email || !subject || !message) {
      return c.json({ success: false, error: 'All fields are required.' }, 400);
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Masakhe Partners Website" <${process.env.SMTP_USER}>`,
      to: 'support@masakhe-partners.co.za',
      replyTo: `"${name}" <${email}>`,
      subject: `[Masakhe Partners] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #118849;">New Contact Form Submission</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding:8px 0; color:#555; width:100px;"><strong>Name</strong></td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0; color:#555;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0; color:#555;"><strong>Subject</strong></td><td style="padding:8px 0;">${subject}</td></tr>
          </table>
          <hr style="border:none; border-top:1px solid #eee; margin:16px 0;" />
          <h3 style="color:#333;">Message</h3>
          <p style="color:#444; line-height:1.6; white-space:pre-wrap;">${message}</p>
          <hr style="border:none; border-top:1px solid #eee; margin:16px 0;" />
          <p style="font-size:12px; color:#999;">Sent from the Masakhe Partners website contact form.</p>
        </div>
      `,
    });

    return c.json({ success: true });
  } catch (err: any) {
    console.error('Email send error:', err);
    return c.json({ success: false, error: 'Failed to send message. Please try again.' }, 500);
  }
});

export default {
  port: 8080,
  fetch: app.fetch,
};
