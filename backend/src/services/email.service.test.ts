import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ContactRequestBody } from '../types/contact.types.js';

const sendMailMock = vi.fn();

vi.mock('nodemailer', () => ({
  default: {
    createTransport: vi.fn(() => ({
      sendMail: sendMailMock,
    })),
  },
}));

describe('email service', () => {
  const contactData: ContactRequestBody = {
    name: 'Test User',
    phone: '+1 555 123 4567',
    email: 'user@example.com',
    message: 'Hello, I would like to discuss a project.',
  };

  beforeEach(() => {
    sendMailMock.mockReset();
  });

  it('sends one owner email with a copy to the user', async () => {
    sendMailMock.mockResolvedValueOnce({});
    const { sendContactEmails } = await import('./email.service.js');

    await sendContactEmails(contactData);

    expect(sendMailMock).toHaveBeenCalledTimes(1);
    expect(sendMailMock).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'owner@example.com',
        cc: 'user@example.com',
        replyTo: 'user@example.com',
      }),
    );
  });

  it('throws a public error when SMTP sending fails', async () => {
    sendMailMock.mockRejectedValueOnce(new Error('SMTP authentication failed'));
    const { sendContactEmails } = await import('./email.service.js');

    await expect(sendContactEmails(contactData)).rejects.toThrow('Failed to send email. Please try again later.');
  });
});
