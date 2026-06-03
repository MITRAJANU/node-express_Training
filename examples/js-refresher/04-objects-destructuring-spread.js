// JavaScript refresher: objects, destructuring, shorthand, spread, and rest.
// Express connection: controllers often destructure req.body, req.params, and req.query.
// React connection: spread is used for immutable state updates.

const requestBody = {
  title: "Practice destructuring",
  description: "Use the same style as Express controllers",
  status: "todo"
};

const { title, status } = requestBody;
const createdBy = "student@example.com";

const task = {
  title,
  status,
  createdBy,
  description: requestBody.description
};

const updatedTask = {
  ...task,
  status: "done"
};

const { description, ...summary } = updatedTask;

const dynamicField = "priority";
const taskWithDynamicField = {
  ...updatedTask,
  [dynamicField]: "high"
};

// KEY: spread creates a new object instead of changing the old one.
console.log("Original:", task);
console.log("Updated copy:", updatedTask);
console.log("Rest object:", summary);
console.log("Computed property:", taskWithDynamicField);
