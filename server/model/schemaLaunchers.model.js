import mongoose from "mongoose";

const schema = new mongoose.Schema({
  city: String,
  rocketType: String,
  latitude: Number,
  longitude: Number,
  name: String,
});

const launchers = mongoose.model("launchers", schema);
export default launchers;
