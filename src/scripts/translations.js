const supportedLocales = ["zh", "pt"];
const cache = new Map();
let currentLocale = "zh";

function resolveKey(object, path) {
  return path.split(".").reduce((accumulator, segment) => accumulator?.[segment], object);
}

async function loadMessages(locale) {
  if (cache.has(locale)) return cache.get(locale);

  const response = await fetch(`/locales/${locale}.json`);
  if (!response.ok) {
    throw new Error(`Failed to load locale ${locale}`);
  }

  const messages = await response.json();
  cache.set(locale, messages);
  return messages;
}

export function getCurrentLocale() {
  return currentLocale;
}

export function detectLocale() {
  const urlLocale = new URLSearchParams(window.location.search).get("lang");
  if (supportedLocales.includes(urlLocale)) return urlLocale;

  const stored = window.localStorage.getItem("brprop-locale");
  if (supportedLocales.includes(stored)) return stored;

  const browserLocale = navigator.language?.toLowerCase() ?? "";
  return browserLocale.startsWith("pt") ? "pt" : "zh";
}

export async function applyTranslations(locale) {
  const safeLocale = supportedLocales.includes(locale) ? locale : "zh";
  const messages = await loadMessages(safeLocale);

  currentLocale = safeLocale;
  document.documentElement.lang = safeLocale;
  window.localStorage.setItem("brprop-locale", safeLocale);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = resolveKey(messages, element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = resolveKey(messages, element.dataset.i18nHtml);
    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = resolveKey(messages, element.dataset.i18nPlaceholder);
    if (typeof value === "string") {
      element.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll("[data-locale-button]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.localeButton === safeLocale);
  });

  document.dispatchEvent(
    new CustomEvent("brprop:locale-changed", {
      detail: { locale: safeLocale, messages }
    })
  );

  return { locale: safeLocale, messages };
}

export async function initTranslations() {
  const initialLocale = detectLocale();

  document.querySelectorAll("[data-locale-button]").forEach((button) => {
    if (!button.dataset.localeBound) {
      button.dataset.localeBound = "true";
      button.addEventListener("click", async () => {
        await applyTranslations(button.dataset.localeButton);
      });
    }
  });

  return applyTranslations(initialLocale);
}
