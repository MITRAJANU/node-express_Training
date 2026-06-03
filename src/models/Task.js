import mongoose from "mongoose";
import "./User.js";

// Model layer: schema validation protects data before it reaches MongoDB.
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"]
    },
    description: {
      type: String,
      trim: true,
      default: ""
    },
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo"
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    }
  },
  { timestamps: true }
);

// 👉 KEY: Indexes speed up common reads but add write/storage cost.
taskSchema.index({ status: 1 });
taskSchema.index({ owner: 1, createdAt: -1 });

export const Task = mongoose.model("Task", taskSchema);
