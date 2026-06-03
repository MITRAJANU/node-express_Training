# Start Branch Interview Prep

## Concept-in-one-line

- Repository checkpoint: a saved branch state that lets every student restart from the same working code.
- Environment variable: a value supplied outside the code so secrets and machine-specific settings do not get hard-coded.
- npm script: a named command in `package.json` that gives everyone the same way to run the app.

## Likely Interview Questions

1. Why keep secrets out of source code?
   Secrets are different per environment and should not be committed where they can leak.
2. What does `npm start` do?
   It runs the command configured under the `start` script in `package.json`.
3. Why use `.env.example`?
   It documents required environment variables without exposing real secret values.
4. Why use Git branches for checkpoints?
   Each branch is a stable learning milestone that students can check out independently.
5. What does `"type": "module"` change in Node?
   It enables ES module syntax, so files use `import` and `export` instead of `require`.

## Gotcha Traps

- "Put the real MongoDB password in `.env.example`" is wrong. `.env.example` should show variable names and safe placeholder values.
- "A branch is a backup copy" is incomplete. A branch is a named pointer to a commit history.

## Whiteboard Question

Draw how a student moves from `main` to `start` to `checkpoint-01-js-refresher` during a live class.
