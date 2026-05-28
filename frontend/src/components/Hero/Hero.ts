import { profile } from '../../data/profile';
import { createElementFromHtml } from '../../utils/dom';

export function createHeroSection(): HTMLElement {
  return createElementFromHtml<HTMLElement>(`
    <header class="hero" id="top">
      <nav class="hero__nav" aria-label="Главная навигация">
        <a class="hero__brand" href="#top">${profile.name}</a>
        <a class="hero__nav-link" href="#contacts">Контакты</a>
      </nav>
      <div class="hero__content container">
        <p class="eyebrow">${profile.role}</p>
        <h1>${profile.name}</h1>
        <p class="hero__description">${profile.intro}</p>
        <a class="button button--primary" href="#contacts">Связаться</a>
      </div>
    </header>
  `);
}
