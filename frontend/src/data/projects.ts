import type { Project } from '../types/project.types';

export const projects: Project[] = [
  {
    title: '[Проект 1]',
    description: 'Лендинг или веб-интерфейс с адаптивной версткой и модульной структурой.',
    stack: ['HTML5', 'SCSS', 'TypeScript'],
    contribution: 'Реализовал структуру страниц, UI-компоненты, адаптивность и базовую интерактивность.',
  },
  {
    title: '[Проект 2]',
    description: 'Приложение с отправкой данных на backend и обработкой пользовательских состояний.',
    stack: ['TypeScript', 'Node.js', 'REST API'],
    contribution: 'Настроил работу с API, обработку loading/success/error и клиентскую валидацию.',
  },
  {
    title: '[Проект 3]',
    description: 'Экспериментальный проект с AI-функцией через серверную часть.',
    stack: ['TypeScript', 'Node.js', 'AI API'],
    contribution: 'Спроектировал безопасную схему, где frontend обращается к AI только через backend.',
  },
];
