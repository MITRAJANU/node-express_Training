import http from "node:http";

const port = 3001;

const tasks = [
  {
    id: "1",
    title: "Revise JavaScript promises",
    status: "todo"
  },
  {
    id: "2",
    title: "Build first Node server",
    status: "in-progress"
  }
];

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
};

const notFound = (res) => {
  sendJson(res, 404, {
    success: false,
    data: null,
    message: "Route not found"
  });
};

const server = http.createServer((req, res) => {
  // 👉 KEY: Before Express, we inspect req.method and req.url manually.
  if (req.method === "GET" && req.url === "/health") {
    sendJson(res, 200, {
      success: true,
      data: { status: "ok" },
      message: "Node http server is running"
    });
    return;
  }

  if (req.method === "GET" && req.url === "/api/tasks") {
    sendJson(res, 200, {
      success: true,
      data: tasks,
      message: "Tasks fetched successfully"
    });
    return;
  }

  if (req.method === "POST" && req.url === "/api/tasks") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const parsedBody = JSON.parse(body || "{}");

        if (!parsedBody.title) {
          sendJson(res, 400, {
            success: false,
            data: null,
            message: "Title is required"
          });
          return;
        }

        const newTask = {
          id: String(tasks.length + 1),
          title: parsedBody.title,
          status: parsedBody.status || "todo"
        };

        tasks.push(newTask);

        sendJson(res, 201, {
          success: true,
          data: newTask,
          message: "Task created successfully"
        });
      } catch {
        sendJson(res, 400, {
          success: false,
          data: null,
          message: "Request body must be valid JSON"
        });
      }
    });

    return;
  }

  notFound(res);
});

server.listen(port, () => {
  console.log(`Node http example running at http://localhost:${port}`);
});
