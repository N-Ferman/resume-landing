import type { ContactFormData, ContactResponse } from '../types/contact.types';
import { requestJson } from './apiClient';

export async function sendContactForm(data: ContactFormData): Promise<ContactResponse> {
  return requestJson<ContactResponse>('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
