import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "node:zlib";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(
    join(__dirname, "files", "fileToCompress.txt")
  );
  const destination = createWriteStream(join(__dirname, "files", "archive.gz"));

  source.pipe(gzip).pipe(destination);

  destination.on("finish", () => {
    console.log("File compressed successfully");
  });

  source.on("error", (error) => {
    console.error("Error reading file:", error.message);
  });

  destination.on("error", (error) => {
    console.error("Error writing file:", error.message);
  });
};

await compress();
