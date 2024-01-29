import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const files = path.join(__dirname, "files");
const copyFiles = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await fs.cp(files, copyFiles, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
