import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  try {
    const inputFile = join(__dirname, "files", "fileToCompress.txt");
    const outputFile = join(__dirname, "files", "archive.gz");

    const readStream = createReadStream(inputFile);
    const writeStream = createWriteStream(outputFile);
    const gzipStream = createGzip();

    readStream.on("error", (error) =>
      console.error("Read error:", error.message)
    );
    writeStream.on("error", (error) =>
      console.error("Write error:", error.message)
    );
    gzipStream.on("error", (error) =>
      console.error("Gzip error:", error.message)
    );

    readStream.pipe(gzipStream).pipe(writeStream);

    await new Promise((resolve) => {
      writeStream.on("finish", resolve);
    });

    console.log("File archived successfully");
  } catch (error) {
    console.error("Error:", error.message);
  }
};

compress();
