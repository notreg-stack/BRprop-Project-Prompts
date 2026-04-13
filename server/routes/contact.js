import express from "express";
import { z } from "zod";
import { contactRateLimiter } from "../middleware/rateLimit.js";
import { validateBody } from "../middleware/validation.js";
import {
  getCropLabel,
  getInterestLabel,
  sendAutoReply,
  sendContactEmail
} from "../services/email.js";
import { logger } from "../utils/logger.js";

export const contactRouter = express.Router();

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().max(60).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  interest: z.enum(["land_purchase", "investment", "consulting", "other"]),
  area: z.union([z.string(), z.number()]).optional(),
  crop: z.enum(["soybean", "corn", "cotton", "multiple"]).optional(),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  locale: z.enum(["zh", "pt"]).optional().default("zh"),
  originPage: z.string().trim().max(200).optional()
});

contactRouter.post("/", contactRateLimiter, validateBody(contactSchema), async (req, res, next) => {
  try {
    const payload = req.body;
    const locale = payload.locale ?? "zh";

    const normalized = {
      ...payload,
      locale,
      area: payload.area ? String(payload.area) : "",
      interestLabel: getInterestLabel(payload.interest, locale),
      cropLabel: getCropLabel(payload.crop, locale),
      submittedAt: new Date().toISOString()
    };

    await sendContactEmail(normalized);
    await sendAutoReply({
      name: payload.name,
      email: payload.email,
      locale
    });

    logger.info("Contact form submitted", {
      email: payload.email,
      interest: payload.interest,
      locale
    });

    return res.json({
      success: true,
      message: locale === "pt" ? "Mensagem recebida com sucesso." : "咨询已成功提交。"
    });
  } catch (error) {
    next(error);
  }
});
