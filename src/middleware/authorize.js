import { ApiError } from "../utils/ApiError.js";

// Middleware layer: authorization checks permission after authentication.
export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      next(new ApiError(401, "Authentication is required"));
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      next(new ApiError(403, "You are not allowed to perform this action"));
      return;
    }

    next();
  };
};
