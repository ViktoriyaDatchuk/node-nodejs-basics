import { createReadStream } from "fs";
import { stdout } from "process";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const stream = createReadStream(join(__dirname, "files", "fileToRead.txt"), {
    encoding: "utf8",
  });

  stream.on("data", (chunk) => stdout.write(chunk));

  stream.on("error", (error) => {
    console.error("Error:", error.message);
  });

  stream.on("end", () => {
    console.log("\nCompleted.");
  });
};

await read();
