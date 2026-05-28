import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('apiClient', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv('VITE_API_URL', 'http://localhost:5000/');
  });

  it('normalizes VITE_API_URL', async () => {
    const { API_BASE_URL } = await import('./apiClient');

    expect(API_BASE_URL).toBe('http://localhost:5000');
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
});
