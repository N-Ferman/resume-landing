import { profile } from '../../data/profile';
import { techStack } from '../../data/techStack';
import { createElementFromHtml } from '../../utils/dom';

export function createAboutSection(): HTMLElement {
  const stackItems = techStack.map((item) => `<li>${item}</li>`).join('');
  const directions = profile.directions.map((item) => `<li>${item}</li>`).join('');
  const education = profile.education.map((item) => `<li>${item}</li>`).join('');

  return createElementFromHtml<HTMLElement>(`
    <section class="section about" id="about" aria-labelledby="about-title">
      <div class="container section__grid">
        <div>
          <p class="eyebrow">Обо мне</p>
          <h2 id="about-title">Backend-разработка с вниманием к деталям</h2>
          <p>${profile.experience}</p>
        </div>
        <div class="about__panel">
          <h3>Стек технологий</h3>
          <ul class="tag-list">${stackItems}</ul>
          <h3>Основные направления</h3>
          <ul class="check-list">${directions}</ul>
          <h3>Образование</h3>
          <ul class="check-list">${education}</ul>
        </div>
      </div>
    </section>
  `);
}
