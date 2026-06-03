# Checkpoint 04 Interview Prep

## Concept-in-one-line

- MongoDB: a document database that stores JSON-like documents in collections.
- Mongoose: an ODM that maps JavaScript objects to MongoDB documents and schemas.
- Schema: a structure that defines fields, types, validation, and defaults for documents.
- Index: a database data structure that speeds reads for selected fields.
- Referencing: storing one document's id inside another document.
- Populate: Mongoose's helper for replacing a referenced id with selected data from the related document.
- asyncHandler: a wrapper that forwards async errors to Express error middleware.

## Likely Interview Questions

1. SQL vs NoSQL: when would you pick each?
   SQL fits strong relational consistency and complex joins; NoSQL fits flexible document shapes and simple horizontal scaling patterns.
2. What does a Mongoose schema do?
   It defines document structure, validation, defaults, indexes, and references at the application layer.
3. Embedding vs referencing in MongoDB?
   Embed data read together and owned together; reference data that is large, reused, or changes independently.
4. What does an index do?
   It speeds reads by maintaining a searchable structure, but it uses storage and slows writes because the index must be updated.
5. What does `.populate()` do?
   It replaces a referenced ObjectId with selected fields from the related document.
6. Why use asyncHandler?
   It avoids repetitive try/catch in each async controller and sends rejected promises to the central error handler.
7. Why validate in both Express and Mongoose?
   Express validation gives fast request feedback; Mongoose validation protects the database boundary.

## Gotcha Traps

- "MongoDB has no schema" is incomplete. MongoDB is flexible, but Mongoose can enforce schema rules in the app.
- "Indexes always make apps faster" is wrong. They help reads but add write and storage cost.
- "Populate is the same as a SQL join" is too simple. It is a Mongoose-level convenience that issues additional lookup work.

## Whiteboard Question

Design the Task document and explain why owner is referenced instead of copied into every task.
