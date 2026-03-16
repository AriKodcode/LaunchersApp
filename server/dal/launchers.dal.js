import launchers from "../model/schema.model.js";

export async function getAllLaunchers() {
  return await new launchers.find();
}
export async function getLauncherById() {
  return await new launchers.findOne();
}
export async function addedLauncer(launcher) {
  return await new launchers.create(launcher);
}
export async function deleteLauncherById(id) {
  return await new launchers.findByIdAndDelete(id);
}
export async function updateLauncherById(id, updateData) {
  return await new launchers.findByIdAndUpdate(id, updateData);
}
