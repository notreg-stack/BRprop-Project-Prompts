import { getArticleBySlug, getLocalizedValue } from "./data.js";
import { initializePage, renderSourceList, setDocumentTitle } from "./app.js";

function renderArticle(locale) {
  const container = document.querySelector("[data-article-detail]");
  if (!container) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  const article = getArticleBySlug(slug) ?? getArticleBySlug("foreign-acquisition-rural-land");

  setDocumentTitle(getLocalizedValue(article.title, locale));

  container.innerHTML = `
    <article class="article-layout">
      <header class="card">
        <div class="card-body">
          <p class="card-meta">${article.readTime} min</p>
          <h1>${getLocalizedValue(article.title, locale)}</h1>
          <p class="lead">${getLocalizedValue(article.summary, locale)}</p>
        </div>
      </header>

      ${article.sections
        .map(
          (section) => `
            <section class="card">
              <div class="card-body prose">
                <h2>${getLocalizedValue(section.heading, locale)}</h2>
                ${section.paragraphs
                  .map((paragraph) => `<p>${getLocalizedValue(paragraph, locale)}</p>`)
                  .join("")}
                ${
                  section.bullets
                    ? `<ul>${section.bullets
                        .map((bullet) => `<li>${getLocalizedValue(bullet, locale)}</li>`)
                        .join("")}</ul>`
                    : ""
                }
              </div>
            </section>
          `
        )
        .join("")}

      <section class="card">
        <div class="card-body prose">
          <h2>${locale === "zh" ? "重要提示" : "Aviso importante"}</h2>
          <p>${getLocalizedValue(article.disclaimer, locale)}</p>
        </div>
      </section>

      <section class="card">
        <div class="card-body prose">
          <h2>${locale === "zh" ? "参考来源" : "Fontes"}</h2>
          <ul>${renderSourceList(article.sources)}</ul>
        </div>
      </section>
    </article>
  `;
}

initializePage(renderArticle);
