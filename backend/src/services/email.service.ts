import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport/index.js';
import { env } from '../config/env.js';
import type { ContactRequestBody } from '../types/contact.types.js';
import { AppError } from '../utils/appError.js';

const smtpOptions: SMTPTransport.Options & { family: 4 } = {
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_SECURE,
  family: 4,
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 15_000,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
};

const transporter = nodemailer.createTransport(smtpOptions);

export async function sendContactEmails(data: ContactRequestBody): Promise<void> {
  try {
    await sendContactEmailWithUserCopy(data);
  } catch (error) {
    console.error('Email sending failed:', getEmailErrorDetails(error));
    throw new AppError('Failed to send email. Please try again later.', 502);
  }
}

async function sendContactEmailWithUserCopy(data: ContactRequestBody): Promise<void> {
  await transporter.sendMail({
    from: env.SMTP_FROM,
    to: env.OWNER_EMAIL,
    cc: data.email,
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
      '',
      'A copy of this email was sent to the contact email provided by the user.',
    ].join('\n'),
  });
}

function getEmailErrorDetails(error: unknown): Record<string, unknown> {
  if (error && typeof error === 'object') {
    return {
      name: 'name' in error ? error.name : undefined,
      code: 'code' in error ? error.code : undefined,
      command: 'command' in error ? error.command : undefined,
      responseCode: 'responseCode' in error ? error.responseCode : undefined,
      message: 'message' in error ? error.message : undefined,
    };
  }

  return {
    message: String(error),
  };
}
