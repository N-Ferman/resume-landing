import { profile } from '../../data/profile';
import { createElementFromHtml } from '../../utils/dom';

export function createWorkflowSection(): HTMLElement {
  const items = [
    ['Архитектура', profile.workflow.architecture],
    ['Работа с задачами', profile.workflow.tasks],
    ['AI-инструменты', profile.workflow.ai],
    ['Ручная проверка', profile.workflow.review],
  ]
    .map(
      ([title, text]) => `
        <article class="workflow-card">
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `,
    )
    .join('');

  return createElementFromHtml<HTMLElement>(`
    <section class="section workflow" aria-labelledby="workflow-title">
      <div class="container">
        <p class="eyebrow">Как я работаю</p>
        <h2 id="workflow-title">От структуры к проверенному результату</h2>
        <div class="workflow__grid">${items}</div>
      </div>
    </section>
  `);
}
