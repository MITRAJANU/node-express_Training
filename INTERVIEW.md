# Checkpoint 02 Interview Prep

## Concept-in-one-line

- HTTP server: a process that receives HTTP requests and sends HTTP responses.
- Route: a method and path combination that maps a request to code.
- JSON API: an API that sends and receives JSON data.
- Request body: client-sent data, commonly used with POST and PUT.
- Status code: a numeric signal that tells the client whether the request succeeded and why.

## Likely Interview Questions

1. What is an HTTP request?
   It is a message from a client containing a method, URL, headers, and sometimes a body.
2. What is an HTTP response?
   It is the server's reply containing a status code, headers, and usually a body.
3. Why does POST return 201 for creation?
   201 means a new resource was created successfully.
4. Why do we set `Content-Type: application/json`?
   It tells the client that the response body is JSON.
5. What work does Express do for us?
   Express gives cleaner routing, middleware, body parsing, and error handling patterns.
6. Why does request body parsing use events in raw Node?
   The body can arrive in chunks, so Node emits `data` events until the `end` event fires.

## Gotcha Traps

- "GET requests should send bodies" is a bad habit. Use query parameters or path parameters for read filters.
- "All errors are 500" is wrong. Bad input is 400; missing routes are 404.
- "JSON.parse is always safe" is wrong. Invalid JSON throws and must be handled.

## Whiteboard Question

Trace a POST `/api/tasks` request from the client sending JSON to the server returning 201.
