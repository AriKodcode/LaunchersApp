import mongoose from "mongoose";

const schema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  user_type: String,
  last_login: Date,
});

const Users = mongoose.model("users", schema);
export default Users;
