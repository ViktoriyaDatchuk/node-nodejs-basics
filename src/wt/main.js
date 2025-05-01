import { Worker } from "worker_threads";
import os from "os";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const cores = os.cpus().length;
  let results = [];

  const createWorker = (index) => {
    return new Promise((resolve) => {
      const worker = new Worker(join(__dirname, "worker.js"), {
        workerData: index + 10,
      });

      worker.on("message", (data) => {
        resolve(data);
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });
    });
  };

  const workerPromises = [];
  for (let i = 0; i < cores; i++) {
    workerPromises.push(createWorker(i));
  }

  results = await Promise.all(workerPromises);
  console.log(results);
};

await performCalculations();
