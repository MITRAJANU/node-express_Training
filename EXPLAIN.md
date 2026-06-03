# Checkpoint 03 Instructor Notes

## The analogy

- Middleware is like airport security checkpoints: the request passes through each checkpoint before reaching the destination.
- A controller is like the department that actually handles the work after reception sends the request there.
- Centralized error handling is like one help desk for complaints instead of every department inventing its own process.

## Build-up narration

Now that students have seen raw HTTP, Express should feel like a cleaner way to write the same ideas. We introduce layers only because the app has enough behavior to need them. Routes decide where a request goes, validation checks the input, controllers do the work, and the error middleware formats failures. This is the first checkpoint that looks like professional backend structure.

```text
client
  -> express.json()
  -> logger
  -> route
  -> validation
  -> controller
  -> JSON response
  -> errorHandler if something fails
```

## If a student asks...

- Why add controllers now? CRUD logic is large enough that routes would become messy.
- Why validate before the controller? The controller should work with trusted input.
- Why have a custom error class? It lets code throw errors with meaningful HTTP status codes.

## Common student mistakes

- Calling `next()` after already sending a response: explain that one request should get one response.
- Putting business logic in route files: move it into controllers.
- Forgetting to register error middleware after routes: middleware order matters in Express.
