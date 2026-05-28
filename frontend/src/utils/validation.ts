import type { ContactFormData, ContactFormErrors } from '../types/contact.types';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()0-9\s-]{7,20}$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = 'Введите имя минимум из 2 символов.';
  }

  if (!phonePattern.test(data.phone.trim())) {
    errors.phone = 'Введите корректный телефон.';
  }

  if (!emailPattern.test(data.email.trim())) {
    errors.email = 'Введите корректный email.';
  }

  if (data.message.trim().length < 10) {
    errors.message = 'Комментарий должен быть минимум 10 символов.';
  }

  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
