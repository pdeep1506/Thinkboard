import * as serverModule from "../../src/server.js";
import { connectDB } from "../../src/config/db.js";
import serverless from "serverless-http";

const app = serverModule.default;

const expressHandler = serverless(app);

let dbConnected = false;

export const handler = async (event, context) => {
  try {
    if (!dbConnected) {
      // await connectDB();
      dbConnected = true;
    }

    return expressHandler(event, context);
  } catch (error) {
    console.error("Function error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Internal server error",
      }),
    };
  }
};