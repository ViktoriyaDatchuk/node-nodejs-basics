import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  try {
    await fs.rename(
      join(__dirname, "files", "wrongFilename.txt"),
      join(__dirname, "files", "properFilename.md")
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
