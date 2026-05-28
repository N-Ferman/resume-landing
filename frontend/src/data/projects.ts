import type { Project } from '../types/project.types';

export const projects: Project[] = [
  {
    title: 'Org Structure API',
    description: 'REST API для управления организационной структурой компании и древовидной иерархией подразделений.',
    link: 'https://github.com/N-Ferman/org-structure-api',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Pytest'],
    contribution:
      'Самостоятельно спроектировала структуру БД, реализовала backend-архитектуру, CRUD для подразделений и сотрудников, self-referencing связи, ORM-модели, валидацию данных, обработку ошибок, HTTP-статусы, тесты на Pytest и Swagger/OpenAPI документацию.',
  },
  {
    title: 'Backend Authentication Project',
    description: 'Backend-приложение с системой регистрации, аутентификации и авторизации пользователей.',
    link: 'https://github.com/N-Ferman/backend_auth_project',
    stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Docker', 'Pytest'],
    contribution:
      'Реализовала backend-логику аутентификации и авторизации, JWT-based доступ, роли и permissions, защищенные API endpoints, backend-валидацию, обработку ошибок, тестирование API и Docker-конфигурацию.',
  },
  {
    title: 'Task Manager',
    description: 'Django-приложение для управления задачами, постановки целей и отслеживания их статусов.',
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
    description: 'Инструмент для поиска различий в конфигурационных файлах JSON и YAML.',
    link: 'https://clck.ru/3TSqmd',
    stack: ['Python', 'JSON', 'YAML'],
    contribution:
      'Реализовала рекурсивный обход структур данных и поддержку нескольких форматов вывода: stylish, plain и json.',
  },
];
