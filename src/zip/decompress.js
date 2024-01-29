import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  try {
    const inputFile = join(__dirname, "files", "archive.gz");
    const outputFile = join(__dirname, "files", "fileToCompress.txt");

    const readStream = createReadStream(inputFile);
    const writeStream = createWriteStream(outputFile);
    const gunzipStream = createGunzip();

    readStream.on("error", (error) =>
      console.error("Read error:", error.message)
    );
    writeStream.on("error", (error) =>
      console.error("Write error:", error.message)
    );
    gunzipStream.on("error", (error) =>
      console.error("Gunzip error:", error.message)
    );

    readStream.pipe(gunzipStream).pipe(writeStream);

    await new Promise((resolve) => {
      writeStream.on("finish", resolve);
    });

    console.log("File decompressed successfully");
  } catch (error) {
    console.error("Error:", error.message);
  }
};

decompress();
