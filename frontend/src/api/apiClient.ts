interface ApiErrorResponse {
  message?: string;
  errors?: Record<string, string[]>;
}

export function getApiBaseUrl(): string {
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl) {
    throw new Error('VITE_API_URL is not defined. Create frontend/.env with VITE_API_URL=http://localhost:5000.');
  }

  return apiUrl.replace(/\/$/, '');
}

export async function getBackendErrorMessage(response: Response): Promise<string> {
  const fallbackMessage = `Request failed with status ${response.status}.`;

  try {
    const data = (await response.json()) as ApiErrorResponse;

    if (data.message) {
      return data.message;
    }

    if (data.errors) {
      const firstError = Object.values(data.errors)
        .flat()
        .find((message) => Boolean(message));

      if (firstError) {
        return firstError;
      }
    }
  } catch {
    return fallbackMessage;
  }

  return fallbackMessage;
}
