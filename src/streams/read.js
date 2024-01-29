import { fileURLToPath } from "url";
import { dirname } from "path";
import { createReadStream, promises as fsPromises } from "fs";
import { pipeline } from "stream/promises";

const read = async () => {
  try {
    const filePath = fileURLToPath(
      new URL("files/fileToRead.txt", import.meta.url)
    );
    const readStream = createReadStream(filePath, "utf-8");
    await pipeline(readStream, process.stdout);
    console.log("\nRead complete.");
  } catch (error) {
    console.error("Error:", error.message);
  }
};

await read();
