import { validationResult } from "express-validator";

// Middleware layer: validation stays before controllers, so controllers receive trusted input.
export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
    return;
  }

  res.status(400).json({
    success: false,
    data: errors.array(),
    message: "Validation failed"
  });
};
