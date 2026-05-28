import type { Request, Response } from 'express';
import { generateProfileSummary } from '../services/ai.service.js';
import type { AiSummaryResponseBody } from '../types/ai.types.js';

export async function createAiSummary(
  _request: Request,
  response: Response<AiSummaryResponseBody>,
): Promise<void> {
  const summary = await generateProfileSummary();

  response.status(200).json({
    summary,
  });
}
