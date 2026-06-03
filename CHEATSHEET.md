# Backend Masterclass Cheatsheet

## HTTP Methods

| Method | Use | Idempotent |
|---|---|---|
| GET | Read data | Yes |
| POST | Create data | No |
| PUT | Replace a resource | Yes |
| DELETE | Remove a resource | Yes |
| PATCH | Update a resource | Yes|
## Status Codes

| Code | Meaning | Use when |
|---|---|---|
| 200 | OK | Read/update succeeded |
| 201 | Created | POST created a new resource |
| 204 | No Content | DELETE succeeded and returns no body |
| 400 | Bad Request | Input format is invalid |
| 401 | Unauthorized | User is not logged in or token is invalid |
| 403 | Forbidden | User is logged in but not allowed |
| 404 | Not Found | Resource does not exist |
| 409 | Conflict | Duplicate unique value, such as email |
| 500 | Server Error | Unexpected backend failure |

## Express Snippets

```js
app.use(express.json());
app.get("/api/tasks", getTasks);
app.use(errorHandler);
```

```js
export const middleware = (req, res, next) => {
  next();
};
```

## Mongoose Snippets

```js
const tasks = await Task.find().populate("owner", "name email");
const task = await Task.findById(req.params.id);
const created = await Task.create({ title, description, owner });
```

## Common curl Examples

```bash
curl http://localhost:3000/health
```

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Revise Node\",\"description\":\"Read event loop notes\"}"
```

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"student@example.com\",\"password\":\"Password123\"}"
```

```bash
curl http://localhost:3000/api/tasks \
  -H "Authorization: Bearer <token>"
```

## Interview One-liners

- Middleware is a function that runs between request arrival and response completion.
- Authentication checks who you are; authorization checks what you can do.
- A JWT is signed, not encrypted, so its payload is readable but tampering is detectable.
- Hashing is one-way; encryption is reversible with a key.
- A database index speeds reads for selected fields but costs storage and slower writes.
