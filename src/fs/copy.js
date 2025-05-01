import { mkdir, readdir, copyFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  try {
    await mkdir(join(__dirname, "files_copy"));
    const files = await readdir(join(__dirname, "files"));
    for (const file of files) {
      await copyFile(
        join(__dirname, "files", file),
        join(__dirname, "files_copy", file)
      );
    }
  } catch (error) {
    throw new Error("FS operation faileds");
  }
};

await copy();
