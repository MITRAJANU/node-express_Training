// Middleware layer: one place formats every error response.

export const notFound = (req, res, next) => {
  const error = new Error(`Route not found: ${req.method} ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  // Centralized error handling means controllers do not repeat response formatting.
  res.status(statusCode).json({
    success: false,
    data: null,
    message: err.message || "Something went wrong"
  });
};
