export function createElementFromHtml<T extends HTMLElement>(html: string): T {
  const template = document.createElement('template');
  template.innerHTML = html.trim();

  const element = template.content.firstElementChild;

  if (!element) {
    throw new Error('Template did not create an element.');
  }

  return element as T;
}
