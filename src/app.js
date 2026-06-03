import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import { logger } from "./middleware/logger.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import { sendSuccess } from "./utils/sendResponse.js";

const app = express();

// App layer: global middleware and route wiring live here.
app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/health", (req, res) => {
  sendSuccess(res, 200, { status: "ok" }, "Express API is running");
});

app.use("/api/tasks", taskRoutes);

// 👉 KEY: Centralized error handling must be registered after routes.
app.use(notFound);
app.use(errorHandler);

export default app;
