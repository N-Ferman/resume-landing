import type { ContactFormData, ContactResponse } from '../types/contact.types';
import { getApiBaseUrl, getBackendErrorMessage } from './apiClient';

export async function sendContactForm(data: ContactFormData): Promise<ContactResponse> {
  const contactEndpoint = `${getApiBaseUrl()}/api/contact`;

  const response = await fetch(contactEndpoint, {
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
