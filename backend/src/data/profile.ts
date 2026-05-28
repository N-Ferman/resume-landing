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
    'Docker и контейнеризация',
  ],

  contacts: {
    email: 'nferman01@gmail.com',
    telegram: 'https://t.me/N_Ferman',
    github: 'https://github.com/N-Ferman',
  },

  education: [
    'Хекслет — профессия «Python-разработчик»',
    'Московская государственная юридическая академия',
  ],

  projects: [
    {
      title: 'Backend Authentication Project',
      description:
        'Backend-приложение с системой аутентификации и авторизации пользователей.',

      stack: [
        'Python',
        'Django REST Framework',
        'PostgreSQL',
        'JWT',
        'Docker',
      ],

      contribution:
        'Реализовала регистрацию пользователей, JWT-аутентификацию, permissions, защищенные API endpoints, backend-валидацию, тестирование API и Docker-конфигурацию.',
    },

    {
      title: 'Org Structure API',

      description:
        'REST API для управления организационной структурой компании и древовидной иерархией подразделений.',

      stack: [
        'Python',
        'FastAPI',
        'PostgreSQL',
        'SQLAlchemy',
        'Docker',
        'Pytest',
      ],

      contribution:
        'Спроектировала структуру БД, реализовала CRUD для подразделений и сотрудников, self-referencing связи, ORM-модели, REST API, тестирование и обработку ошибок.',
    },

    {
      title: 'Task Manager',

      description:
        'Django-приложение для управления задачами, статусами и метками.',

      stack: [
        'Python',
        'Django',
        'PostgreSQL',
      ],

      contribution:
        'Реализовала аутентификацию и авторизацию пользователей, CRUD-операции, работу с Django ORM и структуру реляционной БД.',
    },

    {
      title: 'Page Analyzer',

      description:
        'Fullstack-приложение на Flask для SEO-анализа веб-страниц.',

      stack: [
        'Python',
        'Flask',
        'PostgreSQL',
      ],

      contribution:
        'Реализовала HTTP-запросы, сбор и хранение данных, обработку ошибок и интеграцию с PostgreSQL.',
    },

    {
      title: 'Gendiff',

      description:
        'CLI-инструмент для поиска различий в JSON- и YAML-конфигурациях.',

      stack: [
        'Python',
      ],

      contribution:
        'Реализовала рекурсивное сравнение структур данных и несколько форматов вывода результатов.',
    },
  ],

  about:
    'Бывший юрист, перешедший в backend-разработку. Имеет аналитический склад ума, внимание к деталям и системный подход к решению задач. Интересуется backend-архитектурой, REST API и проектированием приложений. Быстро осваивает новые технологии, умеет самостоятельно структурировать информацию и доводить решения до рабочего состояния. Ищет первую коммерческую позицию Python Backend Developer.',
};
