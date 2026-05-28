import { generateAiSummary } from '../../api/aiApi';
import { createElementFromHtml } from '../../utils/dom';

export function createAiSummarySection(): HTMLElement {
  const section = createElementFromHtml<HTMLElement>(`
    <section class="section ai-summary" aria-labelledby="ai-summary-title">
      <div class="container ai-summary__inner">
        <div>
          <p class="eyebrow">AI-интеграция</p>
          <h2 id="ai-summary-title">AI-summary профиля</h2>
          <p>Запрос идет через backend, где хранится API-ключ. Frontend получает только готовый текст summary.</p>
        </div>
        <div class="ai-summary__actions">
          <button class="button button--secondary" type="button" data-ai-button>
            Generate AI Summary
          </button>
          <p class="status-message" data-ai-status aria-live="polite"></p>
          <div class="ai-summary__result" data-ai-result hidden></div>
        </div>
      </div>
    </section>
  `);

  const button = section.querySelector<HTMLButtonElement>('[data-ai-button]');
  const status = section.querySelector<HTMLParagraphElement>('[data-ai-status]');
  const result = section.querySelector<HTMLDivElement>('[data-ai-result]');

  button?.addEventListener('click', async () => {
    if (!button || !status || !result) {
      return;
    }

    button.disabled = true;
    status.textContent = 'Генерация summary...';
    status.className = 'status-message';
    result.hidden = true;
    result.textContent = '';

    try {
      const response = await generateAiSummary();
      result.textContent = response.summary;
      result.hidden = false;
      status.textContent = 'Summary готов.';
      status.classList.add('status-message--success');
    } catch (error) {
      status.textContent = error instanceof Error ? error.message : 'Произошла ошибка.';
      status.classList.add('status-message--error');
    } finally {
      button.disabled = false;
    }
  });

  return section;
}
