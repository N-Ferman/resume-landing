import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app } from './app.js';

describe('app routes', () => {
  it('responds to GET /api/health', async () => {
    const response = await request(app).get('/api/health').expect(200);

    expect(response.body).toEqual({
      status: 'ok',
      service: 'resume-landing-backend',
    });
  });

  it('returns validation errors for invalid contact request', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'A',
        phone: 'bad',
        email: 'bad-email',
        message: 'short',
      })
      .expect(400);

    expect(response.body.message).toBe('Validation failed.');
    expect(response.body.errors.email).toBeDefined();
  });
});
