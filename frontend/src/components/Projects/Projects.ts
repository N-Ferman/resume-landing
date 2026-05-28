import { projects } from '../../data/projects';
import { createElementFromHtml } from '../../utils/dom';

export function createProjectsSection(): HTMLElement {
  const cards = projects
    .map(
      (project) => `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <ul class="tag-list">${project.stack.map((item) => `<li>${item}</li>`).join('')}</ul>
          <p class="project-card__contribution">${project.contribution}</p>
          ${project.link ? `<a class="project-card__link" href="${project.link}" target="_blank" rel="noreferrer">Открыть проект</a>` : ''}
        </article>
      `,
    )
    .join('');

  return createElementFromHtml<HTMLElement>(`
    <section class="section projects" aria-labelledby="projects-title">
      <div class="container">
        <p class="eyebrow">Кейсы / Опыт</p>
        <h2 id="projects-title">Проекты</h2>
        <div class="projects__grid">${cards}</div>
      </div>
    </section>
  `);
}
