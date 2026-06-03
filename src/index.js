import app from "./app.js";
import { connectDB } from "./config/db.js";
import { env } from "./config/env.js";

const startServer = async () => {
  await connectDB();

  app.listen(env.port, () => {
    console.log(`Express API running at http://localhost:${env.port}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error.message);
  process.exit(1);
});
