import express from "express";
import cors from "cors";
import "dotenv/config";
import connectMongoose from "./config/connectDB.js";
import launcers from "./routes/launchers.routes.js";
const app = express();

const PORT = process.env.PORT;
connectMongoose();
app.use(express.json());
app.use(cors);

app.use("/api/launchers", launcers);

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
