import { Transform } from "stream";
import { EOL } from "os";
import { promisify } from "util";
import { pipeline as pipelineCallback } from "stream";

const pipeline = promisify(pipelineCallback);

const reverseTransform = new Transform({
  async transform(chunk, encoding, callback) {
    try {
      const reversedChunk =
        chunk.toString().replace(EOL, "").split("").reverse().join("") + EOL;
      callback(null, reversedChunk);
    } catch (error) {
      callback(error);
    }
  },
});

const transform = async () => {
  try {
    await pipeline(process.stdin, reverseTransform, process.stdout);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

await transform();
