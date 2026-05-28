import cors from 'cors';
import { env } from './env.js';

export const corsMiddleware = cors({
  origin: env.FRONTEND_URL,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
});
