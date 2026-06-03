# Checkpoint 03 Interview Prep

## Concept-in-one-line

- Express: a Node framework that simplifies routing, middleware, and HTTP response handling.
- Middleware: a function that receives `req`, `res`, and `next`, and runs during the request pipeline.
- Controller: the layer that holds request handling logic after routing is decided.
- Centralized error handling: one error middleware formats failures for the whole API.
- Input validation middleware: code that checks request data before business logic runs.
- Separation of concerns: keeping routing, validation, logic, and response formatting in separate places.

## Likely Interview Questions

1. What is middleware and what does `next()` do?
   Middleware runs during the request pipeline; `next()` passes control to the next middleware or route handler.
2. What happens if middleware forgets to call `next()`?
   The request can hang because Express does not know to continue.
3. Why keep routes thin?
   Routes should describe the HTTP mapping, while controllers hold the request logic.
4. Why use centralized error handling?
   It gives consistent error responses and avoids repeating try/catch response code in every route.
5. What status code should bad input return?
   400 Bad Request because the client sent invalid data.
6. PUT vs PATCH?
   PUT usually replaces a resource or full update payload; PATCH applies a partial update.
7. What does idempotent mean?
   Repeating the same request produces the same final server state; GET, PUT, and DELETE are idempotent by design.

## Gotcha Traps

- "Middleware is only for authentication" is too narrow. Logging, parsing, validation, and errors are middleware too.
- "Validation belongs inside the database model only" misses API concerns. Validate request shape before controller logic.
- "DELETE must return JSON" is not required. 204 with no body is a valid successful delete response.

## Whiteboard Question

Trace a POST `/api/tasks` request through Express JSON parsing, logger, validation, route, controller, and response.
