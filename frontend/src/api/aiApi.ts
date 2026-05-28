import type { AiSummaryResponse } from '../types/ai.types';
import { requestJson } from './apiClient';

export async function generateAiSummary(): Promise<AiSummaryResponse> {
  return requestJson<AiSummaryResponse>('/api/ai/summary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });
}
