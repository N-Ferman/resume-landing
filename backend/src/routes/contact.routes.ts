import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller.js';
import { validateBody } from '../middleware/validate.middleware.js';
import { contactSchema } from '../validators/contact.validator.js';

export const contactRoutes = Router();

contactRoutes.post('/', validateBody(contactSchema), submitContactForm);
