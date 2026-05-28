import { createElementFromHtml } from '../../utils/dom';

export function createCertificateSection(): HTMLElement {
  return createElementFromHtml<HTMLElement>(`
    <section class="section certificate" aria-labelledby="certificate-title">
      <div class="container certificate__inner">
        <div class="certificate__content">
          <p class="eyebrow">Обучение</p>
          <h2 id="certificate-title">Сертификат Hexlet</h2>
          <p>
            Подтверждение прохождения профессионального курса по Python Development.
            Сертификат дополняет учебные проекты и показывает системную подготовку в backend-разработке.
          </p>
        </div>
        <a class="certificate__media" href="/assets/images/hexlet-certificate.jpg" target="_blank" rel="noreferrer">
          <img
            src="/assets/images/hexlet-certificate.jpg"
            alt="Сертификат Hexlet о завершении курса Python Development"
            loading="lazy"
            width="640"
            height="905"
          />
        </a>
      </div>
    </section>
  `);
}
