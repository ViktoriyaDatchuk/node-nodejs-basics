import { argv } from "node:process";

const parseArgs = () => {
  const args = argv.slice(2);
  const result = [];

  for (let i = 0; i < args.length; i += 2) {
    const propsName = args[i].replace("--", "");
    result.push(`${propsName} is ${args[i + 1]}`);
  }
  console.log(result.join(", "));
};

parseArgs();
