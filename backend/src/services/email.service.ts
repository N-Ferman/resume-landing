import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import type { ContactRequestBody } from '../types/contact.types.js';
import { AppError } from '../utils/appError.js';

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_SECURE,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

export async function sendContactEmails(data: ContactRequestBody): Promise<void> {
  try {
    await Promise.all([sendOwnerEmail(data), sendUserConfirmationEmail(data)]);
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new AppError('Failed to send email. Please try again later.', 502);
  }
}

async function sendOwnerEmail(data: ContactRequestBody): Promise<void> {
  await transporter.sendMail({
    from: env.SMTP_FROM,
    to: env.OWNER_EMAIL,
    replyTo: data.email,
    subject: `New portfolio contact request from ${data.name}`,
    text: [
      'New message from portfolio contact form:',
      '',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      '',
      'Message:',
      data.message,
    ].join('\n'),
  });
}

async function sendUserConfirmationEmail(data: ContactRequestBody): Promise<void> {
  await transporter.sendMail({
    from: env.SMTP_FROM,
    to: data.email,
    subject: 'Your message was received',
    text: [
      `Hello, ${data.name}.`,
      '',
      'Thank you for contacting me through my portfolio website.',
      'I received your message and will reply as soon as possible.',
      '',
      'Your message:',
      data.message,
    ].join('\n'),
  });
}
