// Middleware layer: one place formats every error response.

export const notFound = (req, res, next) => {
  const error = new Error(`Route not found: ${req.method} ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong";

  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid id format";
  }

  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors).map((error) => error.message).join(", ");
  }

  // Centralized error handling means controllers do not repeat response formatting.
  res.status(statusCode).json({
    success: false,
    data: null,
    message
  });
};
