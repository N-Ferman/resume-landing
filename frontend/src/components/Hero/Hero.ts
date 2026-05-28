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
        <div class="hero__copy">
          <p class="eyebrow">${profile.role}</p>
          <h1>${profile.name}</h1>
          <p class="hero__description">${profile.intro}</p>
          <div class="hero__actions">
            <a class="button button--primary" href="#contacts">Связаться</a>
            <a class="button button--secondary" href="#about">Обо мне</a>
          </div>
        </div>
        <figure class="hero__portrait">
          <img src="/assets/images/profile-photo.jpg" alt="Ферман Надежда" />
        </figure>
      </div>
    </header>
  `);
}
