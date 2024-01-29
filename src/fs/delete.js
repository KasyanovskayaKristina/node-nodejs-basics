import { unlink, access } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const filePath = __dirname + "/files/fileToRemove.txt";
  const message = "FS operation failed";

  try {
    await access(filePath);
    await unlink(filePath);
    console.log("File removed successfully");
  } catch (error) {
    throw new Error(message);
  }
};

await remove();
