import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const requiredFiles = [
  "package.json",
  "SPEC.md",
  "src/index.html",
  "src/properties.html",
  "src/property-detail.html",
  "src/knowledge.html",
  "src/article.html",
  "src/about.html",
  "src/contact.html",
  "src/styles/variables.css",
  "src/styles/main.css",
  "src/scripts/main.js",
  "src/scripts/translations.js",
  "src/scripts/data.js",
  "server/index.js",
  "server/routes/contact.js",
  "config/nginx.conf",
  "docker/Dockerfile",
  "README-DEPLOY.md"
];

const missing = [];

for (const relativeFile of requiredFiles) {
  try {
    await access(path.join(root, relativeFile));
  } catch {
    missing.push(relativeFile);
  }
}

if (missing.length > 0) {
  console.error("Missing required files:");
  for (const relativeFile of missing) {
    console.error(`- ${relativeFile}`);
  }
  process.exit(1);
}

console.log(`Project validation passed (${requiredFiles.length} files checked).`);
