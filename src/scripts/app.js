import { articleCategoryLabels, cropLabels, getLocalizedValue } from "./data.js";
import { getCurrentLocale, initTranslations } from "./translations.js";

export async function initializePage(onReady) {
  bindMobileMenu();
  bindSmoothAnchors();
  mountCurrentYear();

  const { locale } = await initTranslations();
  onReady?.(locale);

  document.addEventListener("brprop:locale-changed", (event) => {
    onReady?.(event.detail.locale);
  });
}

function bindMobileMenu() {
  const button = document.querySelector("[data-mobile-menu-button]");
  const panel = document.querySelector("[data-mobile-menu]");
  if (!button || !panel) return;

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("is-open", !expanded);
  });
}

function bindSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function mountCurrentYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = year;
  });
}

export function formatCropList(crops, locale) {
  return crops.map((crop) => getLocalizedValue(cropLabels[crop], locale)).join(" / ");
}

export function renderPropertyCard(property, locale = getCurrentLocale()) {
  return `
    <article class="card property-card">
      <img src="${property.image}" alt="${getLocalizedValue(property.title, locale)}" class="card-media">
      <div class="card-body">
        <span class="pill">${getLocalizedValue(property.status, locale)}</span>
        <h3>${getLocalizedValue(property.title, locale)}</h3>
        <p class="card-meta">${getLocalizedValue(property.location, locale)} · ${property.areaHectares.toLocaleString("en-US")} ha</p>
        <p>${getLocalizedValue(property.summary, locale)}</p>
        <p class="card-meta">${formatCropList(property.crops, locale)}</p>
        <a class="inline-link" href="/property-detail.html?slug=${property.slug}">${locale === "zh" ? "查看详情" : "Ver detalhes"}</a>
      </div>
    </article>
  `;
}

export function renderArticleCard(article, locale = getCurrentLocale()) {
  return `
    <article class="card article-card">
      <div class="card-body">
        <span class="pill">${getLocalizedValue(articleCategoryLabels[article.category], locale)}</span>
        <h3>${getLocalizedValue(article.title, locale)}</h3>
        <p>${getLocalizedValue(article.summary, locale)}</p>
        <p class="card-meta">${article.readTime} min</p>
        <a class="inline-link" href="/article.html?slug=${article.slug}">${locale === "zh" ? "阅读全文" : "Ler artigo"}</a>
      </div>
    </article>
  `;
}

export function renderKnowledgeArticle(article, locale = getCurrentLocale()) {
  const summary = getLocalizedValue(article.summary, locale);
  const disclaimer = getLocalizedValue(article.disclaimer, locale);
  const sections = (article.sections ?? [])
    .map((section) => {
      const paragraphs = (section.paragraphs ?? [])
        .map((paragraph) => `<p>${getLocalizedValue(paragraph, locale)}</p>`)
        .join("");

      const bullets = (section.bullets ?? []).length
        ? `
          <ul class="content-list">
            ${section.bullets
              .map((bullet) => `<li>${getLocalizedValue(bullet, locale)}</li>`)
              .join("")}
          </ul>
        `
        : "";

      return `
        <section class="article-subsection">
          <h3>${getLocalizedValue(section.heading, locale)}</h3>
          ${paragraphs}
          ${bullets}
        </section>
      `;
    })
    .join("");

  const sources = (article.sources ?? []).length
    ? `
      <div class="article-sources">
        <h3>${locale === "zh" ? "参考来源" : "Fontes"}</h3>
        <ul class="content-list">${renderSourceList(article.sources)}</ul>
      </div>
    `
    : "";

  const note = disclaimer
    ? `
      <div class="note-box">
        <strong>${locale === "zh" ? "重要提示" : "Aviso importante"}</strong>
        <p>${disclaimer}</p>
      </div>
    `
    : "";

  return `
    <article class="card article-block">
      <div class="card-body article-block__body">
        <div class="article-block__header">
          <span class="pill">${getLocalizedValue(articleCategoryLabels[article.category], locale)}</span>
          <span class="card-meta">${article.readTime} min</span>
        </div>
        <h2>${getLocalizedValue(article.title, locale)}</h2>
        <p class="lead">${summary}</p>
        ${sections}
        ${note}
        ${sources}
      </div>
    </article>
  `;
}

export function setDocumentTitle(title) {
  if (title) document.title = `BRprop | ${title}`;
}

export function renderSourceList(sources) {
  return sources
    .map(
      (source) =>
        `<li><a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a></li>`
    )
    .join("");
}
