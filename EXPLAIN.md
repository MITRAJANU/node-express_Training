# Checkpoint 01 Instructor Notes

## The analogy

- A promise is like a restaurant token: you do not have the food yet, but the token represents a future result.
- The event loop is like a receptionist who keeps taking new requests while waiting for other teams to finish background work.
- try/catch is like a safety net around code that may fail.

## Build-up narration

Before writing a backend, we need confidence with the JavaScript features backend code uses every day. Scope explains why variables are visible in some places and not others. Promises and async/await explain why a server can wait for files, APIs, or databases without freezing. Error handling matters because real backend code fails in normal situations, not just exceptional ones.

```text
request starts
  -> async function begins
  -> awaits I/O promise
  -> event loop handles other work
  -> promise resolves
  -> function continues
```

## If a student asks...

- Is `await` slower than `.then()`? No; it is mostly syntax over promises.
- Can every function use `await`? Only functions marked `async`, or top-level code in ES modules.
- Why does fetch need `response.ok`? HTTP errors like 404 still produce a response object; they do not automatically throw.

## Common student mistakes

- Putting `await` inside a non-async function: add `async` to the nearest function.
- Forgetting `.catch()` on promise chains: show how rejections need a handler.
- Saying `const` means deeply frozen: change an object property live to demonstrate the difference.
