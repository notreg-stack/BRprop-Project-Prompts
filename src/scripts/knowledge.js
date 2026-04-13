import { articles } from "./data.js";
import { getCurrentLocale } from "./translations.js";
import { initializePage, renderKnowledgeArticle } from "./app.js";

function renderKnowledge(locale = getCurrentLocale()) {
  const stream = document.querySelector("[data-knowledge-stream]");
  if (!stream) return;

  stream.innerHTML = articles.map((article) => renderKnowledgeArticle(article, locale)).join("");
}

initializePage(renderKnowledge);
