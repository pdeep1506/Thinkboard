import serverless from "serverless-http";
import app from "../../src/server.js";
import { connectDB } from "../../src/config/db.js"

let dbConnected = false;

export const handler = async (event, context) => {
  if (!dbConnected) {
    await connectDB();
    dbConnected = true;
  }

  const serverlessHandler = serverless(app);

  return serverlessHandler(event, context);
};