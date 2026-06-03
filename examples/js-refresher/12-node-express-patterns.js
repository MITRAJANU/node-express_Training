// JavaScript refresher: patterns students will see in Express controllers.

const req = {
  params: { id: "task-101" },
  query: { status: "done", page: "1" },
  body: {
    title: "Understand Express request object",
    description: "Destructure params, query, and body"
  },
  headers: {
    authorization: "Bearer sample-token"
  }
};

const controllerExample = (request) => {
  const { id } = request.params;
  const { status, page = "1" } = request.query;
  const { title, description } = request.body;
  const token = request.headers.authorization?.split(" ")[1];

  return {
    id,
    filters: { status, page: Number(page) },
    payload: { title, description },
    token
  };
};

const loggerMiddleware = (request, response, next) => {
  console.log(`Incoming request for task ${request.params.id}`);
  // KEY: Express middleware must call next() when it is done.
  next();
};

loggerMiddleware(req, {}, () => {
  console.log(controllerExample(req));
});
