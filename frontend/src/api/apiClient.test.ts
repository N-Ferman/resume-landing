import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('apiClient', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv('VITE_API_URL', 'http://localhost:5000/');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it('normalizes VITE_API_URL', async () => {
    const { getApiBaseUrl } = await import('./apiClient');

    expect(getApiBaseUrl()).toBe('http://localhost:5000');
  });

  it('throws a clear error when VITE_API_URL is missing', async () => {
    vi.unstubAllEnvs();
    vi.stubEnv('VITE_API_URL', '');

    const { getApiBaseUrl } = await import('./apiClient');

    expect(() => getApiBaseUrl()).toThrow('VITE_API_URL is not defined.');
  });

  it('extracts backend message from error response', async () => {
    const { getBackendErrorMessage } = await import('./apiClient');
    const response = new Response(JSON.stringify({ message: 'Validation failed.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });

    await expect(getBackendErrorMessage(response)).resolves.toBe('Validation failed.');
  });

  it('extracts first validation detail when message is missing', async () => {
    const { getBackendErrorMessage } = await import('./apiClient');
    const response = new Response(
      JSON.stringify({
        errors: {
          email: ['Email has invalid format.'],
        },
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      },
    );

    await expect(getBackendErrorMessage(response)).resolves.toBe('Email has invalid format.');
  });

  it('returns a readable message when backend is unavailable', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new TypeError('Failed to fetch')),
    );

    const { requestJson } = await import('./apiClient');

    await expect(requestJson('/api/ai/summary', { method: 'POST' })).rejects.toThrow(
      'Backend is not available.',
    );
  });
});
