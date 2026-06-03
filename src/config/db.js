import mongoose from "mongoose";
import { env } from "./env.js";

// Config layer: database connection is infrastructure, not route/controller logic.
export const connectDB = async () => {
  // 👉 KEY: All database calls are async because the database is external I/O.
  await mongoose.connect(env.mongoUri);
  console.log("MongoDB connected");
};
