import mongoose from "mongoose";

export default async function connectMongoose() {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://arikodcode_db_user:sI9xvuDdmn1rYOaO@cluster0.ga1fbgq.mongodb.net/"
    );
    console.log("connect to mongoose");
  } catch (err) {
    console.log(err);
  }
}
