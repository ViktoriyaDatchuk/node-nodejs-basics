import { spawn } from "child_process";
import { stdin, stdout } from "process";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const child = spawn("node", [join(__dirname, "files", "script.js"), ...args]);

  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);

  child.on("error", (error) => {
    console.error("Error:", error);
  });

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(["How", "are", "you"]);
