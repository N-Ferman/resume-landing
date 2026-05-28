# Architecture

The project is a small monorepo with two independent applications:

- `frontend` renders the landing page and sends API requests.
- `backend` receives requests, validates data, sends email, and calls OpenAI.

## Frontend

The frontend uses Vite, TypeScript, SCSS, and native DOM APIs.

Main layers:

- `components` - landing sections and UI logic.
- `api` - HTTP requests to backend.
- `data` - placeholder profile, projects, and tech stack.
- `types` - shared frontend interfaces.
- `utils` - DOM helpers and validation.
- `styles` - reset, variables, mixins, and global styles.

The frontend never calls OpenAI directly.

## Backend

The backend uses Express with TypeScript.

Main layers:

- `routes` - endpoint definitions.
- `controllers` - request and response orchestration.
- `services` - email and AI integrations.
- `validators` - Zod schemas.
- `middleware` - validation, rate limit, errors.
- `config` - environment and CORS.
- `types` - backend interfaces.

## Request Flow

Contact form:

```text
ContactForm -> contactApi -> POST /api/contact -> validator -> controller -> email.service
```

AI summary:

```text
AiSummary -> aiApi -> POST /api/ai/summary -> controller -> ai.service -> OpenAI
```

## Security Notes

- Frontend stores only public `VITE_API_URL`.
- Backend stores SMTP and OpenAI secrets in `.env`.
- Backend validates all incoming body data.
- Backend uses CORS and rate limit middleware.
- `.env` files are ignored by Git.
