import { profile } from '../../data/profile';
import { createElementFromHtml } from '../../utils/dom';

export function createFooter(): HTMLElement {
  const year = new Date().getFullYear();

  return createElementFromHtml<HTMLElement>(`
    <footer class="footer">
      <div class="container footer__inner">
        <p>${year} ${profile.name}</p>
        <a href="#top">Наверх</a>
      </div>
    </footer>
  `);
}
