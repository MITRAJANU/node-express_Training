# Backend Masterclass: Tasks API

This repository is a 2-day backend masterclass project for 4th-year B.Tech students. The project grows from plain JavaScript and Node's built-in HTTP server into a production-style Express, MongoDB, JWT, and bcrypt API for managing Tasks owned by Users.

## What this checkpoint adds

This final checkpoint secures the API. Task routes require JWT authentication, users can update/delete only their own tasks, and admins can access an admin-only users route.

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
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d "{\"name\":\"Student One\",\"email\":\"student@example.com\",\"password\":\"Password123\"}"
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"student@example.com\",\"password\":\"Password123\"}"
curl http://localhost:3000/api/tasks -H "Authorization: Bearer <token>"
curl -X POST http://localhost:3000/api/tasks -H "Authorization: Bearer <token>" -H "Content-Type: application/json" -d "{\"title\":\"Practice secured routes\",\"description\":\"Use JWT\"}"
curl -X PUT http://localhost:3000/api/tasks/<taskId> -H "Authorization: Bearer <token>" -H "Content-Type: application/json" -d "{\"title\":\"Updated secure task\",\"status\":\"done\"}"
curl -X DELETE http://localhost:3000/api/tasks/<taskId> -H "Authorization: Bearer <token>"
curl http://localhost:3000/api/admin/users -H "Authorization: Bearer <adminToken>"
```

To test the admin route, update one user document in MongoDB so `role` is `"admin"`, then log in again to get a token with the admin role.

You can also import `postman.json` into Postman. The collection is ordered for classroom demos and automatically stores `token`, `adminToken`, and `taskId` as collection variables.

## Student Exercise

No new exercise in this branch. Use this checkpoint as the complete reference solution.

## Interview angle

Read `INTERVIEW.md` and focus on: authentication vs authorization vs ownership.

Behind? Run `git checkout checkpoint-06-secured` to sync.

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

Import `postman.json` for the final secured API demo. Every checkpoint README also includes copy-pasteable request examples that can be used in Postman, Thunder Client, or curl.
