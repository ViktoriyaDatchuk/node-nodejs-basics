import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "node:zlib";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream(join(__dirname, "files", "archive.gz"));
  const destination = createWriteStream(
    join(__dirname, "files", "fileToCompress.txt")
  );

  source.pipe(gunzip).pipe(destination);

  destination.on("finish", () => {
    console.log("File decompressed successfully");
  });

  source.on("error", (error) => {
    console.error("Error reading file:", error.message);
  });

  destination.on("error", (error) => {
    console.error("Error writing file:", error.message);
  });
};

await decompress();
