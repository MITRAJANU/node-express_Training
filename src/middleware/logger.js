// Middleware layer: logger demonstrates middleware that observes every request.

export const logger = (req, res, next) => {
  const startedAt = Date.now();

  res.on("finish", () => {
    const durationMs = Date.now() - startedAt;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${durationMs}ms`);
  });

  // 👉 KEY: next() hands control to the next middleware or route handler.
  next();
};
