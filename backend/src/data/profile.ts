import type { ProfilePromptData } from '../types/profile.types.js';

export const profilePromptData: ProfilePromptData = {
  name: 'Ферман Надежда',
  role: 'Python Backend Developer (Junior)',
  experience:
    'В рамках обучения на Хекслете реализовала 4 учебных проекта, приближенных к задачам коммерческой разработки.',
  techStack: ['Python', 'Django', 'Flask', 'PostgreSQL', 'Git', 'HTML5', 'CSS3'],
  directions: ['Python backend-разработка', 'Django и Flask приложения', 'PostgreSQL', 'HTTP-запросы и обработка ошибок'],
  contacts: {
    email: 'nferman01@gmail.com',
    telegram: 'https://t.me/N_Ferman',
    github: 'https://github.com/N-Ferman',
  },
  education: [
    'Хекслет: профессия «Python-разработчик»',
    'Высшее образование: Московская государственная юридическая академия',
  ],
  projects: [
    {
      title: 'Task Manager',
      description: 'Django-приложение для управления задачами, постановки целей и отслеживания их статусов.',
      stack: ['Python', 'Django', 'PostgreSQL'],
      contribution:
        'Реализовала аутентификацию и авторизацию пользователей, CRUD-операции для задач, статусов и меток, схему БД на Django ORM.',
    },
    {
      title: 'Page Analyzer',
      description:
        'Fullstack-приложение на Flask для SEO-анализа веб-страниц: статус-коды, заголовки h1 и описания.',
      stack: ['Python', 'Flask', 'PostgreSQL'],
      contribution:
        'Реализовала сбор данных с сайтов, хранение данных в реляционной БД, HTTP-запросы и обработку ошибок.',
    },
    {
      title: 'Gendiff',
      description: 'Инструмент для поиска различий в конфигурационных файлах JSON и YAML.',
      stack: ['Python'],
      contribution:
        'Реализовала рекурсивный обход структур данных и форматы вывода stylish, plain и json.',
    },
  ],
  about:
    'Бывший юрист с аналитическим складом ума и вниманием к деталям. Перешла в разработку, потому что любит создавать четкие, логичные системы и доводить их до рабочего состояния. Быстро учится, умеет самостоятельно находить и структурировать информацию. Ищет первую коммерческую работу.',
};
