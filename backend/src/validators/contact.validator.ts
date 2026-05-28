import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must contain at least 2 characters.').max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+()0-9\s-]{7,20}$/, 'Phone number has invalid format.'),
  email: z.string().trim().email('Email has invalid format.').max(120),
  message: z.string().trim().min(10, 'Message must contain at least 10 characters.').max(2000),
});
