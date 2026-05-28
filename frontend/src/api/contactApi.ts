import type { ContactFormData, ContactResponse } from '../types/contact.types';
import { API_BASE_URL, getBackendErrorMessage } from './apiClient';

const CONTACT_ENDPOINT = `${API_BASE_URL}/api/contact`;

export async function sendContactForm(data: ContactFormData): Promise<ContactResponse> {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(await getBackendErrorMessage(response));
  }

  return response.json() as Promise<ContactResponse>;
}
