import { Router } from "express";
import { getUsers } from "../controllers/adminController.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Route layer: this route demonstrates reusable RBAC middleware.
const router = Router();

router.get("/users", authenticate, authorize("admin"), asyncHandler(getUsers));

export default router;
