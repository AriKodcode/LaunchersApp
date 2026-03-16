import mongoose from "mongoose";
import "dotenv/config";

const URI = process.env.MONGOOSE_URI;
export default async function connectMongoose() {
  try {
    const connect = await mongoose.connect(URI);
    console.log("connect to mongoose");
  } catch (err) {
    console.log(err);
  }
}
