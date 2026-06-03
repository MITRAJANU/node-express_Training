import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { User } from "../models/User.js";
import { ApiError } from "../utils/ApiError.js";

// Middleware layer: authentication verifies the caller's identity from a JWT.
export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      next(new ApiError(401, "Authorization token is required"));
      return;
    }

    const token = authHeader.split(" ")[1];
    // 👉 KEY: verify checks the signature and expiry; decode alone is not enough.
    const payload = jwt.verify(token, env.jwtSecret);
    const user = await User.findById(payload.userId);

    if (!user) {
      next(new ApiError(401, "Token user no longer exists"));
      return;
    }

    req.user = user;
    next();
  } catch {
    next(new ApiError(401, "Invalid or expired token"));
  }
};
