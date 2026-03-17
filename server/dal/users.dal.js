import Users from "../model/schemaUsers.js";

export async function addUser(user) {
  return await Users.create(user);
}
export async function updateUser(id, update) {
  return await Users.findByIdAndUpdate(id, update, { new: true });
}
export async function deleteUser(id) {
  return await Users.findByIdAndDelete(id);
}
export async function getUser(username) {
  return await Users.findOne(username);
}
export async function getUsers() {
  return await Users.find();
}
