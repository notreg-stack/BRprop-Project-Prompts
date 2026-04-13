import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { apiRateLimiter } from "./middleware/rateLimit.js";
import { contactRouter } from "./routes/contact.js";
import { logger } from "./utils/logger.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const srcDir = path.join(rootDir, "src");
const publicDir = fs.existsSync(distDir) ? distDir : srcDir;

const app = express();
const port = Number(process.env.PORT ?? 3000);
const allowedOrigin = process.env.ALLOWED_ORIGIN ?? "*";

app.use(
  helmet({
    crossOriginResourcePolicy: false
  })
);
app.use(cors({ origin: allowedOrigin }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, _res, next) => {
  logger.info("HTTP request", {
    method: req.method,
    path: req.path,
    ip: req.ip
  });
  next();
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", mode: "public", timestamp: new Date().toISOString() });
});

app.use("/api", apiRateLimiter);
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", mode: "api", timestamp: new Date().toISOString() });
});
app.use("/api/contact", contactRouter);

app.use(express.static(publicDir, { extensions: ["html"] }));

app.use((req, res, next) => {
  if (req.path.startsWith("/api/")) {
    return res.status(404).json({ error: "API route not found" });
  }
  next();
});

app.use((error, _req, res, _next) => {
  logger.error("Unhandled server error", {
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? undefined : error.stack
  });

  res.status(500).json({
    error: process.env.NODE_ENV === "production" ? "Internal server error" : error.message
  });
});

app.listen(port, () => {
  logger.info("BRprop server listening", {
    port,
    publicDir
  });
});
