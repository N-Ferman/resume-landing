import { describe, expect, it } from 'vitest';
import type { ContactFormData } from '../types/contact.types';
import { hasValidationErrors, validateContactForm } from './validation';

const validFormData: ContactFormData = {
  name: 'Test User',
  phone: '+1 555 123 4567',
  email: 'test@example.com',
  message: 'Hello, I would like to discuss a project.',
};

describe('validateContactForm', () => {
  it('returns no errors for valid contact data', () => {
    const errors = validateContactForm(validFormData);

    expect(errors).toEqual({});
    expect(hasValidationErrors(errors)).toBe(false);
  });

  it('returns errors for invalid contact data', () => {
    const errors = validateContactForm({
      name: 'A',
      phone: 'bad',
      email: 'not-an-email',
      message: 'short',
    });

    expect(errors.name).toBeDefined();
    expect(errors.phone).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.message).toBeDefined();
    expect(hasValidationErrors(errors)).toBe(true);
  });
});
