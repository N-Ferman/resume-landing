import OpenAI from 'openai';
import { env } from '../config/env.js';
import { profilePromptData } from '../data/profile.js';
import { AppError } from '../utils/appError.js';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export async function generateProfileSummary(): Promise<string> {
  const prompt = [
    'Create a professional profile summary in Russian.',
    'Do not invent facts. Use only the provided placeholders and profile data.',
    'Keep the text suitable for a junior developer portfolio landing page.',
    'Return plain text only, without markdown, headings, lists, or bold formatting.',
    'The summary must be 4-6 complete sentences.',
    'Do not return only the name.',
    'Mention the candidate name, target role, Python backend focus, key technologies, Hexlet projects, legal background, and search for the first commercial developer role.',
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
            'You write clear, honest portfolio summaries for junior developers. Always produce a complete paragraph, not a title.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.4,
      max_tokens: 180,
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
    if (error instanceof AppError) {
      throw error;
    }

    console.error('AI request failed:', getOpenAiErrorDetails(error));
    throw new AppError('Failed to generate AI summary. Please try again later.', 502);
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
  const mainStack = profilePromptData.techStack.slice(0, 5).join(', ');

  return [
    `${profilePromptData.name} — ${profilePromptData.role} с фокусом на Python backend-разработку.`,
    `В рамках обучения на Хекслете она реализовала учебные проекты, приближенные к коммерческим задачам: ${projectNames}.`,
    `В работе использует ${mainStack}, умеет проектировать серверную логику, работать с PostgreSQL, HTTP-запросами и обработкой ошибок.`,
    'Юридический бэкграунд помогает ей внимательно анализировать требования, структурировать информацию и доводить решения до рабочего состояния.',
    'Сейчас Надежда ищет первую коммерческую роль в разработке, где сможет применить ответственность, аккуратность и backend-навыки на пользу продукту.',
  ].join(' ');
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
