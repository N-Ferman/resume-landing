import { describe, expect, it } from 'vitest';
import { contactSchema } from './contact.validator.js';

describe('contactSchema', () => {
  it('accepts valid contact payload', () => {
    const result = contactSchema.safeParse({
      name: 'Test User',
      phone: '+1 555 123 4567',
      email: 'test@example.com',
      message: 'Hello, I would like to discuss a project.',
    });

    expect(result.success).toBe(true);
  });

  it('rejects invalid contact payload', () => {
    const result = contactSchema.safeParse({
      name: 'A',
      phone: 'bad',
      email: 'bad-email',
      message: 'short',
    });

    expect(result.success).toBe(false);
  });
});
