# Checkpoint 01 Interview Prep

## Concept-in-one-line

- `let`: a block-scoped variable that can be reassigned.
- `const`: a block-scoped binding that cannot be reassigned.
- Promise: an object representing future success or failure of async work.
- async/await: syntax that lets promise code read like synchronous code.
- Event loop: the runtime mechanism that lets Node continue work while I/O waits outside the main JavaScript thread.
- try/catch: structured error handling for code that may throw.

## Likely Interview Questions

1. Why is Node single-threaded but still handles concurrency?
   JavaScript runs on one main thread, but Node delegates I/O to the operating system or worker pool and resumes callbacks through the event loop.
2. What is the difference between `let` and `const`?
   Both are block-scoped; `let` can be reassigned, while `const` cannot be rebound.
3. Does `const` make an object immutable?
   No. It prevents assigning a different object to the variable, but the object's properties can still change.
4. What is a promise?
   A promise is a placeholder for async work that will either resolve with a value or reject with an error.
5. Why use async/await?
   It makes promise code easier to read and keeps error handling close to the async operation.
6. Why should fetch code use try/catch?
   Network calls can fail, and explicit error handling prevents silent failures and unhandled rejections.

## Gotcha Traps

- "Node is multi-threaded because it handles many users" is imprecise. Node's JavaScript execution is mainly single-threaded; concurrency comes from non-blocking I/O and the event loop.
- "await blocks the whole server" is wrong. It pauses only the current async function, not the entire Node process.
- "const means object values cannot change" is wrong. The binding is constant, not the nested data.

## Whiteboard Question

Trace what happens when an async function awaits a promise that resolves after a timer.
