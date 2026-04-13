import { properties } from "./data.js";
import { initializePage, renderPropertyCard } from "./app.js";
import { getCurrentLocale } from "./translations.js";

function renderProperties(locale = getCurrentLocale()) {
  const grid = document.querySelector("[data-properties-grid]");
  const select = document.querySelector("[data-property-filter]");
  if (!grid || !select) return;

  const selectedCrop = select.value;
  const filtered = selectedCrop
    ? properties.filter((property) => property.crops.includes(selectedCrop))
    : properties;

  grid.innerHTML = filtered.map((property) => renderPropertyCard(property, locale)).join("");
}

initializePage((locale) => {
  const select = document.querySelector("[data-property-filter]");
  if (select && !select.dataset.bound) {
    select.dataset.bound = "true";
    select.addEventListener("change", () => renderProperties());
  }
  renderProperties(locale);
});
