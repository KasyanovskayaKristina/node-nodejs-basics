import { readdir, access } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const folderPath = __dirname + "/files";
  const message = "FS operation failed";

  try {
    await access(folderPath);
    const files = await readdir(folderPath);
    console.log("Files in the 'files' folder:", files);
  } catch (error) {
    throw new Error(message);
  }
};

await list();
