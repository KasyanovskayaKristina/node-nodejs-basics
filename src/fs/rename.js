import { rename as NewRename, access } from "fs/promises"; // Используем fs/promises для асинхронных операций с файлами
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const sourcePath = __dirname + "/files/wrongFilename.txt";
  const destinationPath = __dirname + "/files/properFilename.md";
  const message = "FS operation failed";
  try {
    await access(destinationPath);

    throw new Error("File already exists");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await NewRename(sourcePath, destinationPath);
        console.log("File renamed successfully");
      } catch (err) {
        throw new Error(message);
      }
    } else {
      throw new Error(message);
    }
  }
};

await rename();
