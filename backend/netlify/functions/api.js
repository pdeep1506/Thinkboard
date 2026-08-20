import serverless from "serverless-http";
import app from "../../src/server.js";
import { connectDB } from "../../src/config/db.js"

let dbConnected = false;

const handler = serverless(async (req, res) => {
  if (!dbConnected) {
    await connectDB();
    dbConnected = true;
  }
});

export const handler = async (event, context) => {
  await connectToDatabase();

  const serverlessHandler = serverless(app);

  return serverlessHandler(event, context);
};