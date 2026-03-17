import launchers from "../model/schemaLaunchers.model.js";

export async function getAllLaunchers() {
  return await launchers.find();
}
export async function getLauncherById(id) {
  return await launchers.findOne(id);
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
