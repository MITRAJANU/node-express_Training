// JavaScript refresher: Error objects and custom errors.
// Express connection: controllers can throw/pass errors to central error middleware.

class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

const findTask = (id) => {
  if (!id) {
    throw new ApiError(400, "Task id is required");
  }

  if (id !== "1") {
    throw new ApiError(404, "Task not found");
  }

  return { id: "1", title: "Learn error handling" };
};

try {
  const task = findTask("2");
  console.log(task);
} catch (error) {
  // KEY: In Express, the error handler would format this response.
  console.log({
    success: false,
    statusCode: error.statusCode || 500,
    message: error.message
  });
}
