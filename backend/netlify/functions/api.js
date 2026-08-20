import serverless from "serverless-http";
import app from "../../src/server.js";
import { connectDB } from "../../src/config/db.js"

const handler = serverless(async (req, res) => {
  await connectDB();
  return app(req, res);
});

export { handler };