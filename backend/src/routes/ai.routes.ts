import { Router } from 'express';
import { createAiSummary } from '../controllers/ai.controller.js';
import { validateBody } from '../middleware/validate.middleware.js';
import { aiSummarySchema } from '../validators/ai.validator.js';

export const aiRoutes = Router();

aiRoutes.post('/summary', validateBody(aiSummarySchema), createAiSummary);
