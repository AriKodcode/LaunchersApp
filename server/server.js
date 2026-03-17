import express from "express";
import cors from "cors";
import "dotenv/config";
import connectMongoose from "./config/connectDB.js";
import launchers from "./routes/launchers.routes.js";
import auth from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
connectMongoose();

app.use("/api/launchers", launchers);
app.use("/api/auth", auth);

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
