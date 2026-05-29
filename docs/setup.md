# Setup

## Requirements

- Node.js
- npm

## Frontend Environment

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000
```

Only public values should be stored in frontend env files.

## Backend Environment

Create `backend/.env`:

```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173

OWNER_EMAIL=owner@example.com

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_FROM="Portfolio Contact <no-reply@example.com>"

OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o-mini
```

Do not commit real secrets.

For production deploys, replace all SMTP placeholders with real provider values in the backend hosting
environment. The contact form cannot send email while `SMTP_HOST=smtp.example.com`,
`SMTP_USER=your_smtp_user`, or `SMTP_PASS=your_smtp_password` are still used.

Common SMTP settings:

- Port `587`: `SMTP_SECURE=false`
- Port `465`: `SMTP_SECURE=true` or omit it, because the backend enables secure SMTP automatically for port `465`

On Vercel, set `VITE_API_URL` to the deployed backend URL. In the current split deploy setup, the frontend
does not serve `/api/*` itself; it calls the Render backend.

## Install

```bash
npm --prefix frontend install
npm --prefix backend install
```

## Run

Backend:

```bash
npm run dev:backend
```

Frontend:

```bash
npm run dev:frontend
```

## Build

```bash
npm run build
```
