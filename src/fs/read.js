import { readFile, access } from "fs/promises"; // Используем fs/promises для асинхронных операций с файлами
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = __dirname + "/files/fileToRead.txt";
  const message = "FS operation failed";

  try {
    await access(filePath);
    const content = await readFile(filePath, "utf-8");
    console.log("Content of fileToRead.txt:", content);
  } catch (error) {
    throw new Error(message);
  }
};

await read();
