import { ApiError } from "../utils/ApiError.js";
import { sendSuccess } from "../utils/sendResponse.js";

// Controller layer: request business logic lives here, not in routes.

const tasks = [
  {
    id: "1",
    title: "Revise Express middleware",
    description: "Understand req, res, and next",
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const validStatuses = ["todo", "in-progress", "done"];

export const getTasks = (req, res) => {
  sendSuccess(res, 200, tasks, "Tasks fetched successfully");
};

export const getTaskById = (req, res, next) => {
  const task = tasks.find((item) => item.id === req.params.id);

  if (!task) {
    next(new ApiError(404, "Task not found"));
    return;
  }

  sendSuccess(res, 200, task, "Task fetched successfully");
};

export const createTask = (req, res) => {
  const now = new Date().toISOString();
  const task = {
    id: String(Date.now()),
    title: req.body.title,
    description: req.body.description || "",
    status: req.body.status || "todo",
    createdAt: now,
    updatedAt: now
  };

  tasks.push(task);

  // 👉 KEY: POST returns 201 because a new resource was created.
  sendSuccess(res, 201, task, "Task created successfully");
};

export const updateTask = (req, res, next) => {
  const task = tasks.find((item) => item.id === req.params.id);

  if (!task) {
    next(new ApiError(404, "Task not found"));
    return;
  }

  task.title = req.body.title;
  task.description = req.body.description || "";
  task.status = req.body.status || task.status;
  task.updatedAt = new Date().toISOString();

  sendSuccess(res, 200, task, "Task updated successfully");
};

export const deleteTask = (req, res, next) => {
  const index = tasks.findIndex((item) => item.id === req.params.id);

  if (index === -1) {
    next(new ApiError(404, "Task not found"));
    return;
  }

  tasks.splice(index, 1);
  res.status(204).send();
};

export const isValidStatus = (value) => validStatuses.includes(value);
