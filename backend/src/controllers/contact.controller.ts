import type { Request, Response } from 'express';
import { sendContactEmails } from '../services/email.service.js';
import type { ContactRequestBody, ContactResponseBody } from '../types/contact.types.js';

export async function submitContactForm(
  request: Request<unknown, ContactResponseBody, ContactRequestBody>,
  response: Response<ContactResponseBody>,
): Promise<void> {
  await sendContactEmails(request.body);

  response.status(200).json({
    message: 'Your message was sent successfully.',
  });
}
