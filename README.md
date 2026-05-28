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

## Docs

- [Architecture](docs/architecture.md)
- [API](docs/api.md)
- [Setup](docs/setup.md)
- [Testing](docs/testing.md)
- [Final Audit](docs/final-audit.md)
