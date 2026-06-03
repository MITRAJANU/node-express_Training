# Checkpoint 04 Instructor Notes

## The analogy

- A MongoDB collection is like a folder of similar forms.
- A Mongoose schema is like the form template that says which fields are allowed.
- An index is like the index at the back of a textbook: faster lookup, extra pages to maintain.

## Build-up narration

The API behavior stays almost the same, but the storage changes completely. That is the point of separation of concerns: routes barely care whether data comes from memory or MongoDB. The controller now awaits database calls, so async error handling becomes important. Mongoose gives us validation and relationships, but it does not remove the need to think about data modeling.

```text
client
  -> route
  -> validation middleware
  -> async controller
  -> Mongoose model
  -> MongoDB
  -> controller formats success
  -> errorHandler formats failure
```

## If a student asks...

- Why still validate in Express if Mongoose validates? Express catches bad requests before database work starts.
- Why not embed owner details in Task? User data can change independently, so referencing avoids stale copies.
- Why does Mongo need a connection string? The app must know which database server and database name to use.

## Common student mistakes

- Starting the app without MongoDB running: check `MONGO_URI` and database availability.
- Using a non-ObjectId id in URLs: validation returns 400 before Mongoose queries.
- Forgetting `await`: the controller returns a promise instead of actual data.
