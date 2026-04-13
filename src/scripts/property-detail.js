import { getPropertyBySlug, getLocalizedValue } from "./data.js";
import { formatCropList, initializePage, setDocumentTitle } from "./app.js";

function renderProperty(locale) {
  const container = document.querySelector("[data-property-detail]");
  if (!container) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  const property = getPropertyBySlug(slug) ?? getPropertyBySlug("mato-grosso-soy-corridor");

  setDocumentTitle(getLocalizedValue(property.title, locale));

  container.innerHTML = `
    <section class="detail-hero card">
      <img src="${property.image}" alt="${getLocalizedValue(property.title, locale)}" class="detail-hero-media">
      <div class="card-body">
        <span class="pill">${getLocalizedValue(property.status, locale)}</span>
        <h1>${getLocalizedValue(property.title, locale)}</h1>
        <p class="card-meta">${getLocalizedValue(property.location, locale)} · ${property.areaHectares.toLocaleString("en-US")} ha</p>
        <p>${getLocalizedValue(property.summary, locale)}</p>
        <p class="card-meta">${formatCropList(property.crops, locale)}</p>
      </div>
    </section>

    <section class="detail-grid">
      <article class="card">
        <div class="card-body">
          <h2>${locale === "zh" ? "项目亮点" : "Destaques"}</h2>
          <ul class="content-list">
            ${property.highlights
              .map((item) => `<li>${getLocalizedValue(item, locale)}</li>`)
              .join("")}
          </ul>
        </div>
      </article>
      <article class="card">
        <div class="card-body">
          <h2>${locale === "zh" ? "尽调重点" : "Prioridades de diligência"}</h2>
          <ul class="content-list">
            ${property.diligence
              .map((item) => `<li>${getLocalizedValue(item, locale)}</li>`)
              .join("")}
          </ul>
        </div>
      </article>
    </section>
  `;
}

initializePage(renderProperty);
