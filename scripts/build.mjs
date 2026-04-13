import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sourceDir = path.join(root, "src");
const distDir = path.join(root, "dist");

await rm(distDir, { force: true, recursive: true });
await mkdir(distDir, { recursive: true });
await cp(sourceDir, distDir, { recursive: true });

console.log(`Build completed: ${path.relative(root, distDir)}`);
