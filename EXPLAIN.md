# Start Branch Instructor Notes

## The analogy

- A checkpoint branch is like a saved game slot: if someone gets stuck, they reload the exact class state.
- `.env.example` is like a blank form: it tells students what values they must fill in locally.

## Build-up narration

We begin with the smallest possible runnable Node project so setup issues are visible before real backend concepts arrive. The important teaching point is not the hello-world message; it is that everyone can run the same command and see the same result. The folder structure is empty on purpose because each later checkpoint gives those folders a reason to exist.

## If a student asks...

- Why are the folders empty? They preview the final architecture without adding complexity yet.
- Why not write all code in one file? We start small, then split responsibilities when the app needs it.
- Why ES modules? Modern Node supports `import` and `export`, and most current backend code uses them.

## Common student mistakes

- Forgetting to run `npm install`: ask them to check whether `node_modules/` exists.
- Creating `.env` with a wrong variable name: compare it with `.env.example`.
- Running from the wrong folder: confirm `package.json` is in the current directory.
