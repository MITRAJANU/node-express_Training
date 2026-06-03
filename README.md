# Backend Masterclass: Tasks API

This repository is a 2-day backend masterclass project for 4th-year B.Tech students. The project grows from plain JavaScript and Node's built-in HTTP server into a production-style Express, MongoDB, JWT, and bcrypt API for managing Tasks owned by Users.

## What this checkpoint adds

This checkpoint adds the main Express app with in-memory Task CRUD. It introduces separation of concerns, middleware, input validation, and centralized error handling.

## Prerequisites

- Node.js 20 LTS or newer
- MongoDB local server or MongoDB Atlas connection string
- Git
- Postman or Thunder Client for testing requests

## Pre-session Setup

Run these commands before class:

```bash
git clone <repo-url>
cd node-express_Training
git checkout start
npm install
copy .env.example .env
npm start
```

The `start` branch runs a hello-world server so students can confirm Node is working before the masterclass begins.

## How to run it

```bash
npm install
npm start
node examples/js-refresher/01-let-const-scope.js
node examples/js-refresher/02-promises.js
node examples/js-refresher/03-async-await.js
node examples/js-refresher/04-fetch-try-catch.js
node examples/node-http-server/server.js
npm start
```

## What to test

```bash
curl http://localhost:3000/health
curl http://localhost:3000/api/tasks
curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"Practice Express\",\"description\":\"Build CRUD routes\"}"
curl -X PUT http://localhost:3000/api/tasks/1 -H "Content-Type: application/json" -d "{\"title\":\"Updated task\",\"status\":\"done\"}"
curl -X DELETE http://localhost:3000/api/tasks/1
```

## Student Exercise

Task: after the instructor demos GET and POST, students implement PUT and DELETE.

Time-box: 25 minutes.

Done when PUT returns 200 with updated task data, DELETE returns 204, and a follow-up GET for that id returns 404.

Solution note: the working solution is already present in this branch so the instructor can demo the end state.

## Interview angle

Read `INTERVIEW.md` and focus on: what is middleware and what does `next()` do?

Behind? Run `git checkout checkpoint-03-express-crud` to sync.

## Branch Map

| Branch | What it demonstrates |
|---|---|
| `start` | Project skeleton, setup files, empty `src/` folders, hello-world server |
| `checkpoint-01-js-refresher` | JavaScript refreshers: scope, promises, async/await, fetch, try/catch |
| `checkpoint-02-node-http` | Basic JSON API using Node's built-in `http` module |
| `checkpoint-03-express-crud` | Express in-memory Task CRUD, middleware, validation, centralized errors |
| `checkpoint-04-mongo-crud` | MongoDB persistence with Mongoose models, validation, indexes, populate |
| `checkpoint-05-auth` | User registration, bcrypt password hashing, JWT login |
| `checkpoint-06-secured` | JWT authentication, role authorization, admin route, ownership checks |

## Student Aids

- Keep [CHEATSHEET.md](CHEATSHEET.md) open during the session for HTTP, Express, Mongoose, and curl examples.
- Each checkpoint branch includes its own `INTERVIEW.md` and `EXPLAIN.md`.
- Each checkpoint README includes run commands, sample requests, and a catch-up command.

## Postman / Thunder Client

No generated collection is required. Every checkpoint README includes copy-pasteable request examples that can be used in Postman, Thunder Client, or curl.
