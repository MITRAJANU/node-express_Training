import { Task } from "../models/Task.js";
import { sendSuccess } from "../utils/sendResponse.js";
import { ApiError } from "../utils/ApiError.js";

// Controller layer: request business logic lives here, not in routes.

const validStatuses = ["todo", "in-progress", "done"];

export const getTasks = async (req, res) => {
  const filter = req.user.role === "admin" ? {} : { owner: req.user._id };
  const tasks = await Task.find(filter)
    .sort({ createdAt: -1 })
    .populate("owner", "name email");

  sendSuccess(res, 200, tasks, "Tasks fetched successfully");
};

export const getTaskById = async (req, res, next) => {
  const task = await Task.findById(req.params.id).populate("owner", "name email");

  if (!task) {
    next(new ApiError(404, "Task not found"));
    return;
  }

  const isOwner = task.owner?._id.toString() === req.user._id.toString();
  const isAdmin = req.user.role === "admin";

  if (!isOwner && !isAdmin) {
    next(new ApiError(403, "You can only view your own tasks"));
    return;
  }

  sendSuccess(res, 200, task, "Task fetched successfully");
};

export const createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    description: req.body.description || "",
    status: req.body.status || "todo",
    // 👉 KEY: The server takes ownership from the verified token, not from client input.
    owner: req.user._id
  });

  // 👉 KEY: POST returns 201 because a new resource was created.
  sendSuccess(res, 201, task, "Task created successfully");
};

export const updateTask = async (req, res, next) => {
  const task = req.task;

  task.title = req.body.title;
  task.description = req.body.description || "";
  task.status = req.body.status || task.status;
  await task.save();

  sendSuccess(res, 200, task, "Task updated successfully");
};

export const deleteTask = async (req, res, next) => {
  const task = req.task;

  await task.deleteOne();
  res.status(204).send();
};

export const isValidStatus = (value) => validStatuses.includes(value);
