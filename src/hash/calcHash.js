import { createHash } from "crypto";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const hash = createHash("sha256");
  const stream = createReadStream(
    join(__dirname, "files", "fileToCalculateHashFor.txt")
  );

  stream.on("data", (chunk) => hash.update(chunk));

  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });

  stream.on("error", (error) => console.log("Error", error.message));
};

await calculateHash();
