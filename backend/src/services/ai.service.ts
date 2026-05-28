import OpenAI from 'openai';
import { env } from '../config/env.js';
import { profilePromptData } from '../data/profile.js';
import { AppError } from '../utils/appError.js';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export async function generateProfileSummary(): Promise<string> {
  const requestId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  const prompt = [
    'Create a fresh professional profile summary in Russian.',
    'Do not invent facts. Use only the provided profile data.',
    'Keep the text suitable for a junior developer portfolio landing page.',
    'Return plain text only, without markdown, headings, lists, or bold formatting.',
    'The summary must be 4-6 complete sentences.',
    'Do not return only the name.',
    'Each time, noticeably vary the wording, sentence structure, opening sentence, and order of emphasis.',
    'Mention the candidate name, target role, Python backend focus, key technologies, projects, legal background, and search for the first commercial developer role.',
    `Variation seed: ${requestId}`,
    '',
    `Name: ${profilePromptData.name}`,
    `Role: ${profilePromptData.role}`,
    `Experience: ${profilePromptData.experience}`,
    `Tech stack: ${profilePromptData.techStack.join(', ')}`,
    `Directions: ${profilePromptData.directions.join(', ')}`,
    `Education: ${profilePromptData.education.join('; ')}`,
    `About: ${profilePromptData.about}`,
    'Projects:',
    ...profilePromptData.projects.map((project) =>
      [
        `- ${project.title}`,
        `  Description: ${project.description}`,
        `  Stack: ${project.stack.join(', ')}`,
        `  Contribution: ${project.contribution}`,
      ].join('\n'),
    ),
  ].join('\n');

  try {
    const completion = await openai.chat.completions.create({
      model: env.OPENAI_MODEL,
      messages: [
        {
          role: 'system',
          content:
            'You write clear, honest portfolio summaries for junior developers. Always produce a complete paragraph, not a title. Avoid repeating the same wording between requests.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 230,
    });

    const summary = completion.choices[0]?.message?.content?.trim();

    if (!summary) {
      throw new AppError('AI summary response was empty.', 502);
    }

    if (isIncompleteSummary(summary)) {
      console.warn('AI summary was too short, using fallback summary.');
      return createFallbackSummary();
    }

    return removeMarkdown(summary);
  } catch (error) {
    console.error('AI request failed, using fallback summary:', getOpenAiErrorDetails(error));
    return createFallbackSummary();
  }
}

function isIncompleteSummary(summary: string): boolean {
  const normalizedSummary = removeMarkdown(summary).trim();
  const normalizedName = profilePromptData.name.trim().toLowerCase();
  const sentenceCount = normalizedSummary.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length;

  return normalizedSummary.toLowerCase() === normalizedName || normalizedSummary.length < 180 || sentenceCount < 3;
}

function removeMarkdown(summary: string): string {
  return summary.replace(/\*\*/g, '').trim();
}

function createFallbackSummary(): string {
  const projectNames = profilePromptData.projects.map((project) => project.title).join(', ');
  const mainStack = profilePromptData.techStack.slice(0, 7).join(', ');
  const variants = [
    [
      `${profilePromptData.name} — ${profilePromptData.role} с фокусом на Python backend-разработку и создание REST API.`,
      `В портфолио есть проекты ${projectNames}, где она работала с серверной архитектурой, базами данных, аутентификацией, ORM и тестированием.`,
      `Основной стек включает ${mainStack}, а также Docker и практику backend-валидации.`,
      'Юридический опыт помогает ей внимательно анализировать требования, структурировать информацию и доводить решения до рабочего состояния.',
      'Сейчас Надежда ищет первую коммерческую позицию, где сможет применить аккуратность, ответственность и backend-навыки на пользу продукту.',
    ],
    [
      `${profilePromptData.name} развивается как ${profilePromptData.role} и делает упор на backend-приложения на Python.`,
      `Среди ее проектов — ${projectNames}, которые показывают работу с REST API, PostgreSQL, ролями доступа, Docker и автотестами.`,
      `Она использует ${mainStack} и уделяет внимание структуре БД, обработке ошибок и понятной архитектуре.`,
      'Бэкграунд в юриспруденции усиливает ее внимательность к деталям и умение разбирать сложные требования.',
      'Надежда ищет первую коммерческую роль в разработке, чтобы расти в backend и приносить практическую пользу команде.',
    ],
    [
      `${profilePromptData.name} — junior backend-разработчик, ориентированный на Python, REST API и надежную серверную логику.`,
      `В проектах ${projectNames} она самостоятельно реализовывала API endpoints, ORM-модели, валидацию, права доступа и тестирование.`,
      `Техническая база включает ${mainStack}, Docker, Pytest и работу с PostgreSQL.`,
      'Переход из юридической сферы дал ей сильную аналитическую базу, аккуратность и системный подход.',
      'Сейчас она ищет первую коммерческую позицию Python Backend Developer и готова развиваться в продуктовой разработке.',
    ],
  ];

  return variants[Math.floor(Math.random() * variants.length)].join(' ');
}

function getOpenAiErrorDetails(error: unknown): Record<string, unknown> {
  if (error && typeof error === 'object') {
    return {
      name: 'name' in error ? error.name : undefined,
      status: 'status' in error ? error.status : undefined,
      code: 'code' in error ? error.code : undefined,
      type: 'type' in error ? error.type : undefined,
      message: 'message' in error ? error.message : undefined,
    };
  }

  return {
    message: String(error),
  };
}
