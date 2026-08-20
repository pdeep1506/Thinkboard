import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import notesRoute from "./routes/notesRoute.js";
import { rateLimiter } from "./middleware/rateLimiter.js";

dotenv.config();
const app = express();



if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
else{
  app.use(cors())
}
// Middleware
app.use(express.json())

app.use(rateLimiter)
// simple middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} and Req URL is ${req.url}`)
//     next();
// })

app.use('/api/notes', notesRoute);
app.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ThinkBoard backend is working!",
  });
});
// Connect to MongoDB
// await connectDB();

// Export Express app for Netlify
export default app;

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

// connectDB().then(()=>{
// app.listen(PORT, ()=>{
//     console.log("server started on PORT:5001")
// })
// })

