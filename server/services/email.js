import fs from "node:fs/promises";
import nodemailer from "nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { logger } from "../utils/logger.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../..");

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getLocaleLabel(locale, values) {
  return locale === "pt" ? values.pt : values.zh;
}

function resolveTransportMode() {
  const hasSmtpCredentials =
    process.env.EMAIL_HOST &&
    process.env.EMAIL_PORT &&
    process.env.EMAIL_USER &&
    process.env.EMAIL_PASSWORD;

  if (process.env.EMAIL_PROVIDER === "mock" || !hasSmtpCredentials) {
    return { mode: "mock" };
  }

  return {
    mode: "smtp",
    transporter: nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })
  };
}

const transport = resolveTransportMode();

async function safeReadAttachment(filePath) {
  try {
    await fs.access(filePath);
    return filePath;
  } catch {
    return null;
  }
}

export async function sendContactEmail(payload) {
  const subject =
    payload.locale === "pt"
      ? `[BRprop] Novo contato - ${payload.name}`
      : `[BRprop] 新咨询 - ${payload.name}`;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f1a17; line-height: 1.6;">
      <h2 style="color: #285746;">BRprop lead intake</h2>
      <p><strong>Nome / 姓名:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Telefone / WeChat:</strong> ${escapeHtml(payload.phone || "—")}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(payload.company || "—")}</p>
      <p><strong>Interesse:</strong> ${escapeHtml(payload.interestLabel)}</p>
      <p><strong>Cultura:</strong> ${escapeHtml(payload.cropLabel || "—")}</p>
      <p><strong>Área:</strong> ${escapeHtml(payload.area || "—")}</p>
      <p><strong>Página:</strong> ${escapeHtml(payload.originPage || "—")}</p>
      <p><strong>Locale:</strong> ${escapeHtml(payload.locale)}</p>
      <p><strong>Mensagem:</strong><br>${escapeHtml(payload.message || "—")}</p>
      <p><strong>Enviado em:</strong> ${escapeHtml(payload.submittedAt)}</p>
    </div>
  `;

  if (transport.mode === "mock") {
    logger.info("Mock broker email", { to: process.env.EMAIL_TO ?? "not-configured", subject });
    return { mode: "mock" };
  }

  return transport.transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    replyTo: payload.email,
    subject,
    html
  });
}

export async function sendAutoReply(payload) {
  const qrPath = await safeReadAttachment(
    path.resolve(rootDir, process.env.WECHAT_QR_PATH ?? "./src/assets/qr-codes/wechat-placeholder.svg")
  );

  const subject =
    payload.locale === "pt"
      ? "Recebemos seu contato - BRprop"
      : "感谢您的咨询 - BRprop";

  const html = payload.locale === "pt"
    ? `
      <div style="font-family: Arial, sans-serif; color: #1f1a17; line-height: 1.6;">
        <h2 style="color: #285746;">Obrigado pelo contato</h2>
        <p>Olá, ${escapeHtml(payload.name)}.</p>
        <p>Recebemos a sua mensagem e retornaremos em 24-48 horas.</p>
        <p>Se for útil, responda este email com:</p>
        <ul>
          <li>estado ou região desejada</li>
          <li>faixa de área</li>
          <li>cultura principal</li>
          <li>se o foco é compra, parceria ou estudo regulatório</li>
        </ul>
        <p>WeChat sugerido: <strong>${escapeHtml(process.env.WECHAT_ID ?? "brprop_cn")}</strong></p>
      </div>
    `
    : `
      <div style="font-family: Arial, sans-serif; color: #1f1a17; line-height: 1.6;">
        <h2 style="color: #285746;">感谢您的咨询</h2>
        <p>${escapeHtml(payload.name)}，您好。</p>
        <p>我们已收到您的信息，通常会在 24-48 小时内回复。</p>
        <p>如果方便，请回复以下信息以便我们更快预审：</p>
        <ul>
          <li>目标州或区域</li>
          <li>目标面积</li>
          <li>重点作物</li>
          <li>购买、合作还是法规研究需求</li>
        </ul>
        <p>推荐 WeChat: <strong>${escapeHtml(process.env.WECHAT_ID ?? "brprop_cn")}</strong></p>
      </div>
    `;

  if (transport.mode === "mock") {
    logger.info("Mock auto reply", { to: payload.email, subject });
    return { mode: "mock" };
  }

  const attachments = [];
  if (qrPath) {
    attachments.push({
      filename: path.basename(qrPath),
      path: qrPath
    });
  }

  return transport.transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: payload.email,
    subject,
    html,
    attachments
  });
}

export function getInterestLabel(interest, locale) {
  const labels = {
    land_purchase: { zh: "土地购买", pt: "Compra de terra" },
    investment: { zh: "投资合作", pt: "Parceria de investimento" },
    consulting: { zh: "咨询服务", pt: "Consultoria" },
    other: { zh: "其他", pt: "Outro" }
  };

  return getLocaleLabel(locale, labels[interest]);
}

export function getCropLabel(crop, locale) {
  if (!crop) return "";

  const labels = {
    soybean: { zh: "大豆", pt: "Soja" },
    corn: { zh: "玉米", pt: "Milho" },
    cotton: { zh: "棉花", pt: "Algodão" },
    multiple: { zh: "多种作物", pt: "Múltiplas culturas" }
  };

  return getLocaleLabel(locale, labels[crop]);
}
