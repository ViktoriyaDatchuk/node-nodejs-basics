import { createWriteStream } from "fs";
import { stdin, stdout } from "process";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const stream = createWriteStream(
    join(join(__dirname, "files", "fileToWrite.txt"))
  );

  stdout.write("Write your message\n");
  stdin.on("data", (data) => {
    const dataString = data.toString();
    stream.write(dataString);
    process.exit();
  });

  stdin.on("error", (error) => {
    console.error("Error:", error.message);
  });
};

await write();
