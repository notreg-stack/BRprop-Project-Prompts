const levels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3
};

const configuredLevel = process.env.LOG_LEVEL ?? "info";

function write(level, message, meta = {}) {
  if (levels[level] > levels[configuredLevel]) return;

  const payload = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...meta
  };

  if (process.env.NODE_ENV === "production") {
    console.log(JSON.stringify(payload));
    return;
  }

  const metaText = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : "";
  console.log(`[${payload.timestamp}] ${level.toUpperCase()} ${message}${metaText}`);
}

export const logger = {
  error: (message, meta) => write("error", message, meta),
  warn: (message, meta) => write("warn", message, meta),
  info: (message, meta) => write("info", message, meta),
  debug: (message, meta) => write("debug", message, meta)
};
