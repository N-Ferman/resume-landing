import type { AiSummaryResponse } from '../types/ai.types';
import { API_BASE_URL, getBackendErrorMessage } from './apiClient';

const AI_SUMMARY_ENDPOINT = `${API_BASE_URL}/api/ai/summary`;

export async function generateAiSummary(): Promise<AiSummaryResponse> {
  const response = await fetch(AI_SUMMARY_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  if (!response.ok) {
    throw new Error(await getBackendErrorMessage(response));
  }

  return response.json() as Promise<AiSummaryResponse>;
}
