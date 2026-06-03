import { spawnSync } from "node:child_process";

const files = [
  "01-let-const-scope.js",
  "02-functions-and-closures.js",
  "03-arrays-map-filter-find.js",
  "04-objects-destructuring-spread.js",
  "05-modules/app.js",
  "06-promises.js",
  "07-async-await-try-catch.js",
  "08-promise-all.js",
  "09-json-and-fetch.js",
  "10-error-handling.js",
  "11-react-state-patterns.js",
  "12-node-express-patterns.js"
];

for (const file of files) {
  console.log(`\n--- ${file} ---`);

  const result = spawnSync(process.execPath, [`examples/js-refresher/${file}`], {
    stdio: "inherit",
    shell: false
  });

  if (result.status !== 0) {
    process.exit(result.status);
  }
}
