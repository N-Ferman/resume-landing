# Resume Landing

Личный лендинг-презентация junior Full-Stack разработчика.

Проект показывает базовые навыки frontend-разработки, работы с API, backend на Node.js, безопасной AI-интеграции через сервер и аккуратной структуры репозитория.

## Stack

Frontend:

- Vite
- TypeScript
- SCSS
- Native DOM API, без React

Backend:

- Node.js
- Express
- TypeScript
- Zod
- Nodemailer
- OpenAI API

## Links

- GitHub: https://github.com/N-Ferman/resume-landing
- Deploy: https://resume-landing-seven.vercel.app/
- Backend API: https://resume-landing-b71q.onrender.com

## Project Structure

```text
resume-landing/
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── data/
│   │   ├── styles/
│   │   ├── types/
│   │   └── utils/
│   └── .env.example
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   └── validators/
│   └── .env.example
└── docs/
```

## Quick Start

Install dependencies:

```bash
npm --prefix frontend install
npm --prefix backend install
```

Create environment files:

```bash
copy frontend\.env.example frontend\.env
copy backend\.env.example backend\.env
```

Run backend:

```bash
npm run dev:backend
```

Run frontend:

```bash
npm run dev:frontend
```

Open:

```text
http://localhost:5173
```

## Useful Commands

```bash
npm run build
npm run test
npm run audit:frontend
npm run audit:backend
```

## API

Backend endpoints:

```text
GET  /api/health
POST /api/contact
POST /api/ai/summary
```

Frontend uses only `VITE_API_URL` to call backend. Secret values are stored only in `backend/.env`.

For deploy, configure real SMTP variables on the backend host. The form sends one email to `OWNER_EMAIL`
and puts the user email in `cc`, so the owner receives the request and the user receives a copy of the same
message. Placeholder SMTP values such as `smtp.example.com` will make `/api/contact` return a send error.

## Form Implementation

- Frontend validates `name`, `phone`, `email`, and `message` before sending.
- Backend validates the same payload with Zod.
- UI handles loading, success, validation errors, backend errors, and unavailable backend state.
- Email sending is done only on the backend through SMTP secrets.

## AI Usage

- The site includes an AI summary section that calls `POST /api/ai/summary`.
- The OpenAI API key is stored only on the backend.
- AI tools were used to draft implementation ideas, review edge cases, and check wording.
- Manual fixes included API validation, SMTP error handling, deploy environment checks, and final tests.

## Docs

- [Architecture](docs/architecture.md)
- [API](docs/api.md)
- [Setup](docs/setup.md)
- [Testing](docs/testing.md)
- [Final Audit](docs/final-audit.md)
