import type { AiSummaryResponse } from '../types/ai.types';
import { getApiBaseUrl, getBackendErrorMessage } from './apiClient';

export async function generateAiSummary(): Promise<AiSummaryResponse> {
  const aiSummaryEndpoint = `${getApiBaseUrl()}/api/ai/summary`;

  const response = await fetch(aiSummaryEndpoint, {
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
