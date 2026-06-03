// Utility layer: a small custom error lets controllers choose HTTP status codes.

export class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}
