# Checkpoint 02 Instructor Notes

## The analogy

- A route is like a reception desk label: the method and path decide which desk handles the request.
- Headers are like labels on a parcel: they describe how to read the content.
- Status codes are like traffic signals for clients: they quickly say what happened.

## Build-up narration

This checkpoint shows that Express is not magic; it is a helpful layer over Node's HTTP capabilities. We manually check the method and URL so students understand routing at the lowest useful level. We manually collect the request body to show why body parsing middleware exists later. After this, Express will feel like a solution to visible repetition.

```text
client
  -> HTTP request
  -> method/url checks
  -> optional body parsing
  -> JSON response with status code
```

## If a student asks...

- Why not always use raw `http`? It becomes repetitive and harder to organize as APIs grow.
- Why does the body arrive in chunks? HTTP data is streamed, so large bodies may not arrive all at once.
- Why use 201 instead of 200? 201 specifically communicates that a resource was created.

## Common student mistakes

- Forgetting `return` after sending a response: the function may keep running and try to respond again.
- Sending invalid JSON in curl: validate the quotes and content type.
- Using the wrong port: this example runs on `3001`, while later app code uses `3000`.
