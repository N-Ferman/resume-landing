interface ApiErrorResponse {
  message?: string;
  errors?: Record<string, string[]>;
}

const REQUEST_TIMEOUT_MS = 20_000;

export function getApiBaseUrl(): string {
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl) {
    throw new Error('VITE_API_URL is not defined. Create frontend/.env with VITE_API_URL=http://localhost:5000.');
  }

  return apiUrl.replace(/\/$/, '');
}

export async function requestJson<TResponse>(path: string, init: RequestInit): Promise<TResponse> {
  let response: Response;
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    response = await fetch(`${getApiBaseUrl()}${path}`, {
      ...init,
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again later.');
    }

    throw new Error('Backend is not available. Start the backend server and try again.');
  } finally {
    globalThis.clearTimeout(timeoutId);
  }

  if (!response.ok) {
    throw new Error(await getBackendErrorMessage(response));
  }

  return response.json() as Promise<TResponse>;
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
