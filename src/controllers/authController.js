import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { env } from "../config/env.js";
import { ApiError } from "../utils/ApiError.js";
import { hashPassword, verifyPassword } from "../utils/password.js";
import { sendSuccess } from "../utils/sendResponse.js";

// Controller layer: authentication logic lives here, not in routes or models.

const signToken = (user) => {
  // 👉 KEY: JWT payload should be useful but not sensitive.
  return jwt.sign(
    {
      userId: user._id,
      role: user.role
    },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn }
  );
};

const toSafeUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role
});

export const register = async (req, res, next) => {
  const existingUser = await User.findOne({ email: req.body.email });

  if (existingUser) {
    // 409 is correct because the request conflicts with an existing unique email.
    next(new ApiError(409, "Email is already registered"));
    return;
  }

  const passwordHash = await hashPassword(req.body.password);

  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: passwordHash
  });

  sendSuccess(res, 201, toSafeUser(user), "User registered successfully");
};

export const login = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email }).select("+password");

  if (!user) {
    next(new ApiError(401, "Invalid email or password"));
    return;
  }

  const isPasswordCorrect = await verifyPassword(req.body.password, user.password);

  if (!isPasswordCorrect) {
    next(new ApiError(401, "Invalid email or password"));
    return;
  }

  const token = signToken(user);

  sendSuccess(
    res,
    200,
    {
      user: toSafeUser(user),
      token
    },
    "Login successful"
  );
};
