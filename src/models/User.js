import mongoose from "mongoose";

// Model layer: this lightweight User model exists so Task.owner can reference it.
// Authentication fields are added in checkpoint 05.
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
