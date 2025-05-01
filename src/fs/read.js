import { readFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  try {
    const file = await readFile(
      join(__dirname, "files", "fileToRead.txt"),
      "utf-8"
    );
    console.log(file);
  } catch (error) {
    throw new Error("FS operation faileds");
  }
};

await read();
