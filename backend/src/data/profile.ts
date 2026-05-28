import type { ProfilePromptData } from '../types/profile.types.js';

export const profilePromptData: ProfilePromptData = {
  name: 'Ферман Надежда',
  role: 'Python Backend Developer (Junior)',
  experience:
    'В рамках обучения и pet-проектов реализовала backend- и fullstack-приложения на Python с использованием Django, Flask, FastAPI и PostgreSQL.',
  techStack: [
    'Python',
    'Django',
    'Django REST Framework',
    'FastAPI',
    'Flask',
    'PostgreSQL',
    'SQLAlchemy',
    'JWT',
    'Docker',
    'Pytest',
    'Git',
    'HTML5',
    'CSS3',
  ],
  directions: [
    'Backend-разработка на Python',
    'REST API',
    'Аутентификация и авторизация',
    'PostgreSQL и ORM',
    'Django / Flask / FastAPI приложения',
    'Валидация и обработка ошибок',
    'Docker и тестирование API',
  ],
  contacts: {
    email: 'nferman01@gmail.com',
    telegram: 'https://t.me/N_Ferman',
    github: 'https://github.com/N-Ferman',
  },
  education: [
    'Хекслет: профессия «Python-разработчик»',
    'Московская государственная юридическая академия',
  ],
  projects: [
    {
      title: 'Org Structure API',
      description:
        'REST API для управления организационной структурой компании: подразделения, сотрудники и древовидная иерархия через self-referencing связи.',
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Pytest'],
      contribution:
        'Самостоятельно спроектировала структуру БД, реализовала backend-архитектуру, API endpoints, ORM-модели, валидацию данных, CRUD, обработку ошибок, HTTP-статусы, тесты и Swagger/OpenAPI документацию.',
    },
    {
      title: 'Backend Authentication Project',
      description:
        'Backend-приложение с системой регистрации, аутентификации, JWT-based авторизации, ролями и правилами доступа.',
      stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Docker', 'Pytest'],
      contribution:
        'Реализовала backend-логику аутентификации и авторизации, систему ролей и permissions, защищенные API endpoints, backend-валидацию, обработку ошибок, тестирование API и Docker-окружение.',
    },
    {
      title: 'Task Manager',
      description: 'Django-приложение для управления задачами, статусами и метками.',
      stack: ['Python', 'Django', 'PostgreSQL'],
      contribution:
        'Реализовала аутентификацию и авторизацию пользователей, CRUD-операции, работу с Django ORM и структуру реляционной БД.',
    },
    {
      title: 'Page Analyzer',
      description: 'Fullstack-приложение на Flask для SEO-анализа веб-страниц.',
      stack: ['Python', 'Flask', 'PostgreSQL'],
      contribution:
        'Реализовала HTTP-запросы, сбор и хранение данных, обработку ошибок и интеграцию с PostgreSQL.',
    },
    {
      title: 'Gendiff',
      description: 'CLI-инструмент для поиска различий в JSON- и YAML-конфигурациях.',
      stack: ['Python'],
      contribution:
        'Реализовала рекурсивное сравнение структур данных и несколько форматов вывода результатов.',
    },
  ],
  about:
    'Бывший юрист, перешедший в backend-разработку. Имеет аналитический склад ума, внимание к деталям и системный подход к решению задач. Интересуется backend-архитектурой, REST API и проектированием приложений. Быстро осваивает новые технологии, умеет самостоятельно структурировать информацию и доводить решения до рабочего состояния. Ищет первую коммерческую позицию Python Backend Developer.',
};
