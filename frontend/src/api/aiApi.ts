import type { AiSummaryResponse } from '../types/ai.types';

const AI_SUMMARY_ENDPOINT = '/api/ai/summary';

export async function generateAiSummary(): Promise<AiSummaryResponse> {
  await new Promise((resolve) => window.setTimeout(resolve, 900));

  if (import.meta.env.DEV) {
    return {
      summary:
        '[Ваше имя] - junior Full-Stack разработчик, который показывает навыки frontend-разработки, работы с API, backend-структуры и безопасной AI-интеграции через сервер.',
    };
  }

  const response = await fetch(AI_SUMMARY_ENDPOINT, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Не удалось сгенерировать AI-summary. Попробуйте позже.');
  }

  return response.json() as Promise<AiSummaryResponse>;
}
