import { unlink } from "node:fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  try {
    await unlink(join(__dirname, "files", "fileToRemove.txt"));
  } catch (error) {
    throw new Error("FS operation faileds");
  }
};

await remove();
