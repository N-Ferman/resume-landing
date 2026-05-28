import type { ContactFormData, ContactResponse } from '../types/contact.types';

const CONTACT_ENDPOINT = '/api/contact';

export async function sendContactForm(data: ContactFormData): Promise<ContactResponse> {
  await new Promise((resolve) => window.setTimeout(resolve, 800));

  if (import.meta.env.DEV) {
    return {
      message: 'Форма успешно отправлена. Backend mock вернул успешный ответ.',
    };
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Не удалось отправить форму. Попробуйте позже.');
  }

  return response.json() as Promise<ContactResponse>;
}
