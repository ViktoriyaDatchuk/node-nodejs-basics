import { Transform } from "stream";
import { stdin, stdout } from "process";

const transform = async () => {
  const stream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedString = chunk.toString().split("").reverse().join("");
      callback(null, reversedString);
    },
  });

  stdin.pipe(stream).pipe(stdout);
};

await transform();
