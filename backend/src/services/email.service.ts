import { promises as dns } from 'node:dns';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport/index.js';
import { env } from '../config/env.js';
import type { ContactRequestBody } from '../types/contact.types.js';
import { AppError } from '../utils/appError.js';

const SMTP_TIMEOUTS = {
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 15_000,
};

export async function sendContactEmails(data: ContactRequestBody): Promise<void> {
  try {
    await sendContactEmailWithUserCopy(data);
  } catch (error) {
    console.error('Email sending failed:', getEmailErrorDetails(error));
    throw new AppError('Failed to send email. Please try again later.', 502);
  }
}

async function sendContactEmailWithUserCopy(data: ContactRequestBody): Promise<void> {
  const transporter = nodemailer.createTransport(await createSmtpOptions());

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

async function createSmtpOptions(): Promise<SMTPTransport.Options> {
  const ipv4Host = await resolveSmtpHostToIpv4(env.SMTP_HOST);

  return {
    host: ipv4Host,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    ...SMTP_TIMEOUTS,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
    tls: {
      servername: env.SMTP_HOST,
    },
  };
}

async function resolveSmtpHostToIpv4(host: string): Promise<string> {
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) {
    return host;
  }

  const addresses = await dns.resolve4(host);
  const ipv4Address = addresses[0];

  if (!ipv4Address) {
    throw new AppError(`Could not resolve SMTP host ${host} to IPv4.`, 502);
  }

  return ipv4Address;
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
