import { execSync } from "child_process";
import fs from "fs";

const tmpFile = "/tmp/shelby-upload.json";

const payload = {
  message: "automation upload",
  time: new Date().toISOString(),
};

fs.writeFileSync(tmpFile, JSON.stringify(payload, null, 2));

const cmd = `
shelby upload ${tmpFile} auto/${Date.now()}.json \
  -e "in 7 days" \
  --assume-yes
`;

console.log("Running:", cmd);

execSync(cmd, {
  stdio: "inherit",
  env: process.env, // penting: pass SHELBY_API_KEY
});

console.log("✅ upload sukses");