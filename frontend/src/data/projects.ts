import type { Project } from '../types/project.types';

export const projects: Project[] = [
  {
    title: 'Task Manager',
    description:
      'Django-приложение для управления задачами, постановки целей и отслеживания их статусов.',
    link: 'https://clck.ru/3TSqfx',
    stack: ['Python', 'Django', 'PostgreSQL'],
    contribution:
      'Реализовала аутентификацию и авторизацию пользователей, CRUD-операции для задач, статусов и меток, а также спроектировала схему БД с использованием Django ORM.',
  },
  {
    title: 'Page Analyzer',
    description:
      'Fullstack-приложение на Flask для SEO-анализа веб-страниц: проверка статус-кодов, заголовков h1 и описаний.',
    link: 'https://clck.ru/3TSqj2',
    stack: ['Python', 'Flask', 'PostgreSQL', 'HTTP'],
    contribution:
      'Реализовала сбор данных с сайтов, хранение результатов в реляционной БД, работу с HTTP-запросами и обработку ошибок.',
  },
  {
    title: 'Gendiff',
    description:
      'Инструмент для поиска различий в конфигурационных файлах JSON и YAML.',
    link: 'https://clck.ru/3TSqmd',
    stack: ['Python', 'JSON', 'YAML'],
    contribution:
      'Реализовала рекурсивный обход структур данных и поддержку нескольких форматов вывода: stylish, plain и json.',
  },
];
