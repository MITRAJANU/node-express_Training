import { Task } from "../models/Task.js";
import { ApiError } from "../utils/ApiError.js";

// Middleware layer: ownership authorization protects user-owned resources.
export const ensureTaskOwner = async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    next(new ApiError(404, "Task not found"));
    return;
  }

  const isOwner = task.owner?.toString() === req.user._id.toString();
  const isAdmin = req.user.role === "admin";

  if (!isOwner && !isAdmin) {
    next(new ApiError(403, "You can only modify your own tasks"));
    return;
  }

  req.task = task;
  next();
};
