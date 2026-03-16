import launchers from "../model/schema.model.js";

export async function getAllLaunchers() {
  return await launchers.find();
}
export async function getLauncherById() {
  return await launchers.findOne();
}
export async function addedLauncer(launcher) {
  return await launchers.create(launcher);
}
export async function deleteLauncherById(id) {
  return await launchers.findByIdAndDelete(id);
}
export async function updateLauncherById(id, updateData) {
  return await launchers.findByIdAndUpdate(id, updateData, { new: true });
}
