import { User } from "../models/User.js";
import { sendSuccess } from "../utils/sendResponse.js";

// Controller layer: admin-only operations are separated from normal auth routes.
export const getUsers = async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  sendSuccess(res, 200, users, "Users fetched successfully");
};
