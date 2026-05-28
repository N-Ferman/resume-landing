# Testing

The project uses Vitest.

## Frontend Tests

Current coverage:

- contact form validation
- backend error message parsing
- `VITE_API_URL` normalization

Run:

```bash
npm run test:frontend
```

## Backend Tests

Current coverage:

- `GET /api/health`
- invalid `POST /api/contact`
- contact Zod validator

Run:

```bash
npm run test:backend
```

## All Tests

```bash
npm run test
```

## Manual Checks

After adding real `backend/.env` values:

1. Start backend.
2. Start frontend.
3. Open `http://localhost:5173`.
4. Submit invalid contact form data and check UI errors.
5. Submit valid contact form data and check email delivery.
6. Click `Generate AI Summary` and check rendered result.
