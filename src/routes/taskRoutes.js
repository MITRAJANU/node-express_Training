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
import { authenticate } from "../middleware/authenticate.js";
import { ensureTaskOwner } from "../middleware/ensureTaskOwner.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Route layer: routes map HTTP methods and URLs to middleware plus controllers.
const router = Router();

const idParamRules = [
  param("id").isMongoId().withMessage("Task id must be a valid MongoDB ObjectId")
];

const taskBodyRules = [
  body("title").trim().isLength({ min: 3 }).withMessage("Title must be at least 3 characters"),
  body("description").optional().isString().withMessage("Description must be text"),
  body("status")
    .optional()
    .custom(isValidStatus)
    .withMessage("Status must be todo, in-progress, or done")
];

router.use(authenticate);

router.get("/", asyncHandler(getTasks));
router.get("/:id", idParamRules, validate, asyncHandler(getTaskById));
router.post("/", taskBodyRules, validate, asyncHandler(createTask));
router.put("/:id", [...idParamRules, ...taskBodyRules], validate, asyncHandler(ensureTaskOwner), asyncHandler(updateTask));
router.delete("/:id", idParamRules, validate, asyncHandler(ensureTaskOwner), asyncHandler(deleteTask));

export default router;
