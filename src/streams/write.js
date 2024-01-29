import { fileURLToPath } from "url";
import { dirname } from "path";
import { createWriteStream } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const stream = createWriteStream(__dirname + "/files/fileToWrite.txt");
  process.stdin.pipe(stream);
  console.log("Write something in console and check file fileToWrite.txt \n");
};

await write();
