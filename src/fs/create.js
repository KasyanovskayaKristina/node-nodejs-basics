import fs from "fs/promises";
import path from "path";

const folderPath = "files";
const fileName = "fresh.txt";
const fileContent = "I am fresh and young";
const filePath = path.join(folderPath, fileName);

const create = async () => {
  try {
    await fs.access(filePath);
    throw new Error("FS operation failed: File already exists");
  } catch (error) {
    await fs.writeFile(filePath, fileContent);
    console.log(
      `File '${fileName}' created successfully in the '${folderPath}' folder.`
    );
  }
};

await create();
