import express from 'express';
import { corsMiddleware } from './config/cors.js';
import { errorMiddleware } from './middleware/error.middleware.js';
import { rateLimitMiddleware } from './middleware/rateLimit.middleware.js';
import { aiRoutes } from './routes/ai.routes.js';
import { contactRoutes } from './routes/contact.routes.js';
import { healthRoutes } from './routes/health.routes.js';

export const app = express();

app.set('trust proxy', 1);

app.use(corsMiddleware);
app.use(express.json({ limit: '32kb' }));
app.use(rateLimitMiddleware);

app.use('/api/health', healthRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes);

app.use(errorMiddleware);
