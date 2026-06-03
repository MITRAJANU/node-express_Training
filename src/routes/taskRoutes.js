import { Router } from "express";
import { body, param } from "express-validator";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  isValidStatus,
  updateTask
} from "../controllers/taskController.js";
import { validate } from "../middleware/validate.js";

// Route layer: routes map HTTP methods and URLs to middleware plus controllers.
const router = Router();

const idParamRules = [
  param("id").notEmpty().withMessage("Task id is required")
];

const taskBodyRules = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("description").optional().isString().withMessage("Description must be text"),
  body("status")
    .optional()
    .custom(isValidStatus)
    .withMessage("Status must be todo, in-progress, or done")
];

router.get("/", getTasks);
router.get("/:id", idParamRules, validate, getTaskById);
router.post("/", taskBodyRules, validate, createTask);
router.put("/:id", [...idParamRules, ...taskBodyRules], validate, updateTask);
router.delete("/:id", idParamRules, validate, deleteTask);

export default router;
