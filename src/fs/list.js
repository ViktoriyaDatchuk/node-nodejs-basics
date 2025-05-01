import { readdir } from "node:fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  try {
    const files = await readdir(join(__dirname, "files"));
    console.log(files);
  } catch (error) {
    throw new Error("FS operation faileds");
  }
};

await list();
