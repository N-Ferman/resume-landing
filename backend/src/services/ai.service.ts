import OpenAI from 'openai';
import { env } from '../config/env.js';
import { profilePromptData } from '../data/profile.js';
import { AppError } from '../utils/appError.js';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export async function generateProfileSummary(): Promise<string> {
  const prompt = [
    'Create a concise professional profile summary in Russian.',
    'Do not invent facts. Use only the provided placeholders and profile data.',
    'Keep the text suitable for a junior developer portfolio landing page.',
    '',
    `Name: ${profilePromptData.name}`,
    `Role: ${profilePromptData.role}`,
    `Experience: ${profilePromptData.experience}`,
    `Tech stack: ${profilePromptData.techStack.join(', ')}`,
    `Directions: ${profilePromptData.directions.join(', ')}`,
  ].join('\n');

  try {
    const completion = await openai.chat.completions.create({
      model: env.OPENAI_MODEL,
      messages: [
        {
          role: 'system',
          content: 'You write clear, honest, concise portfolio summaries for developers.',
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

    return summary;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    console.error('AI request failed:', error);
    throw new AppError('Failed to generate AI summary. Please try again later.', 502);
  }
}
