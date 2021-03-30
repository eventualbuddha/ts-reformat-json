import { createHash } from "crypto";
import { readFileSync } from "fs";
import { join } from "path";

const data = readFileSync(join(__dirname, "./data.json"), 'utf-8')
console.log(
  createHash("sha256")
    .update(data)
    .digest("hex")
);
console.log(data);
