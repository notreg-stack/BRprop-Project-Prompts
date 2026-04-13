import { getCurrentLocale, initTranslations } from "./translations.js";

function serializeForm(form) {
  const data = new FormData(form);
  return Object.fromEntries(data.entries());
}

function setMessage(node, text, status) {
  if (!node) return;
  node.textContent = text;
  node.dataset.status = status;
}

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const messageNode = form.querySelector("[data-form-message]");
  const submitButton = form.querySelector('button[type="submit"]');
  const locale = getCurrentLocale();
  const body = serializeForm(form);
  body.locale = locale;
  body.originPage = window.location.pathname;

  submitButton?.setAttribute("disabled", "disabled");
  setMessage(
    messageNode,
    locale === "zh" ? "正在发送，请稍候…" : "Enviando, aguarde…",
    "pending"
  );

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(payload.error || "Request failed");
    }

    setMessage(
      messageNode,
      payload.message || (locale === "zh" ? "信息已提交。" : "Mensagem enviada."),
      "success"
    );
    form.reset();
  } catch (error) {
    setMessage(
      messageNode,
      locale === "zh"
        ? "发送失败，请稍后重试或改用邮件/微信。"
        : "Falha no envio. Tente novamente ou use email/WeChat.",
      "error"
    );
  } finally {
    submitButton?.removeAttribute("disabled");
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  await initTranslations();
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", handleSubmit);
  });
});
