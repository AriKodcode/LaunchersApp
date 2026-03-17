import { getUser } from "../dal/users.dal.js";

export async function checkUser(username, password) {
  if (!username) {
    const error = new Error("Missing username!");
    error.statusCode = 400;
    throw error;
  }
  if (!password) {
    const error = new Error("Missing password!");
    error.statusCode = 400;
    throw error;
  }
  const user = await getUser({ username });
  if (!user) {
    const error = new Error("User not found!");
    error.statusCode = 400;
    throw error;
  }
  if (user.password !== password) {
    const error = new Error("Wrong password!");
    error.statusCode = 400;
    throw error;
  }
  return user;
}
export function checkCreateUser(username, password, email, user_type) {
  if (!username) {
    throw new Error("missing username");
  }
  if (typeof username !== "string") {
    throw new Error("username must be string");
  }
  if (!password) {
    throw new Error("missing password");
  }
  if (typeof password !== "string") {
    throw new Error("password must be string");
  }
  if (!email) {
    throw new Error("missing email");
  }
  if (typeof email !== "string") {
    throw new Error("email must be string");
  }
  if (!user_type) {
    throw new Error("missing user_type");
  }
  if (typeof user_type !== "string") {
    throw new Error("user_type must be string");
  }
}
export async function checkUpdateUser(
  id,
  username,
  password,
  email,
  user_type
) {
  if (!id) {
    throw new Error("missing id");
  }
  const user = await getUser({ _id: id });
  if (!user) {
    throw new Error("user not found");
  }
  const update = {};
  if (username) {
    if (typeof username !== "string") {
      throw new Error("username must be string");
    }
    update.username = username;
  }
  if (password) {
    if (typeof password !== "string") {
      throw new Error("password must be string");
    }
    update.password = password;
  }
  if (email) {
    if (typeof email !== "string") {
      throw new Error("email must be string");
    }
    update.email = email;
  }
  if (user_type) {
    if (typeof user_type !== "string") {
      throw new Error("user_type must be string");
    }
    update.user_type = user_type;
  }
  return update;
}
