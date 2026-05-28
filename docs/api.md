# API

Base URL in local development:

```text
http://localhost:5000
```

## GET /api/health

Checks whether the backend is running.

Response:

```json
{
  "status": "ok",
  "service": "resume-landing-backend"
}
```

## POST /api/contact

Sends a contact form message.

Request body:

```json
{
  "name": "Test User",
  "phone": "+1 555 123 4567",
  "email": "test@example.com",
  "message": "Hello, I would like to discuss a project."
}
```

Success response:

```json
{
  "message": "Your message was sent successfully."
}
```

Validation error response:

```json
{
  "message": "Validation failed.",
  "errors": {
    "email": ["Email has invalid format."]
  }
}
```

## POST /api/ai/summary

Generates a profile summary through backend-only OpenAI integration.

Request body:

```json
{}
```

Success response:

```json
{
  "summary": "Generated profile summary text."
}
```

Error response:

```json
{
  "message": "Failed to generate AI summary. Please try again later."
}
```
