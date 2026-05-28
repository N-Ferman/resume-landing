import { sendContactForm } from '../../api/contactApi';
import { profile } from '../../data/profile';
import type { ContactFormData, ContactFormErrors } from '../../types/contact.types';
import { createElementFromHtml } from '../../utils/dom';
import { hasValidationErrors, validateContactForm } from '../../utils/validation';

const fieldNames: Array<keyof ContactFormData> = ['name', 'phone', 'email', 'message'];

export function createContactFormSection(): HTMLElement {
  const section = createElementFromHtml<HTMLElement>(`
    <section class="section contacts" id="contacts" aria-labelledby="contacts-title">
      <div class="container section__grid">
        <div>
          <p class="eyebrow">Контакты</p>
          <h2 id="contacts-title">Написать мне</h2>
          <p>Можно отправить сообщение через форму или связаться напрямую.</p>
          <ul class="contact-links">
            <li><a href="mailto:${profile.contacts.email}">${profile.contacts.email}</a></li>
            <li><a href="${profile.contacts.telegram}" target="_blank" rel="noreferrer">Telegram</a></li>
            <li><a href="${profile.contacts.github}" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
        <form class="contact-form" novalidate>
          <label>
            <span>Имя</span>
            <input name="name" type="text" autocomplete="name" placeholder="Ваше имя" />
            <small data-error-for="name"></small>
          </label>
          <label>
            <span>Телефон</span>
            <input name="phone" type="tel" autocomplete="tel" placeholder="+1 000 000 0000" />
            <small data-error-for="phone"></small>
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" autocomplete="email" placeholder="email@example.com" />
            <small data-error-for="email"></small>
          </label>
          <label>
            <span>Комментарий</span>
            <textarea name="message" rows="5" placeholder="Кратко опишите ваш вопрос"></textarea>
            <small data-error-for="message"></small>
          </label>
          <button class="button button--primary" type="submit">Отправить</button>
          <p class="status-message" data-form-status aria-live="polite"></p>
        </form>
      </div>
    </section>
  `);

  const form = section.querySelector<HTMLFormElement>('.contact-form');
  const button = section.querySelector<HTMLButtonElement>('button[type="submit"]');
  const status = section.querySelector<HTMLParagraphElement>('[data-form-status]');

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form || !button || !status) {
      return;
    }

    const data = getFormData(form);
    const errors = validateContactForm(data);

    renderErrors(form, errors);
    status.textContent = '';
    status.className = 'status-message';

    if (hasValidationErrors(errors)) {
      status.textContent = 'Проверьте поля формы.';
      status.classList.add('status-message--error');
      return;
    }

    button.disabled = true;
    button.textContent = 'Отправка...';

    try {
      const response = await sendContactForm(data);
      form.reset();
      status.textContent = response.message;
      status.classList.add('status-message--success');
    } catch (error) {
      status.textContent = error instanceof Error ? error.message : 'Произошла ошибка отправки.';
      status.classList.add('status-message--error');
    } finally {
      button.disabled = false;
      button.textContent = 'Отправить';
    }
  });

  return section;
}

function getFormData(form: HTMLFormElement): ContactFormData {
  const formData = new FormData(form);

  return {
    name: String(formData.get('name') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    email: String(formData.get('email') ?? ''),
    message: String(formData.get('message') ?? ''),
  };
}

function renderErrors(form: HTMLFormElement, errors: ContactFormErrors): void {
  fieldNames.forEach((field) => {
    const errorElement = form.querySelector<HTMLElement>(`[data-error-for="${field}"]`);
    const input = form.elements.namedItem(field);

    if (!(input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) || !errorElement) {
      return;
    }

    const message = errors[field] ?? '';
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    errorElement.textContent = message;
  });
}
