import {
  addedLauncer,
  deleteLauncherById,
  getAllLaunchers,
  getLauncherById,
  updateLauncherById,
} from "../dal/launchers.dal.js";
import {
  checkId,
  checkNewLachers,
  checkUpdateLauncher,
} from "../services/launchers.services.js";

export const getApiLaunchers = async (req, res) => {
  try {
    let launchers = await getAllLaunchers();
    const { city, rocketType } = req.query;
    if (city) {
      launchers = launchers.filter((launcher) => launcher.city === city);
    }
    if (rocketType) {
      launchers = launchers.filter(
        (launcher) => launcher.rocketType === rocketType
      );
    }
    res.status(200).json({ launchers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getApiLaunchersById = async (req, res) => {
  try {
    const { id } = req.params;
    checkId(id);
    const launcher = await getLauncherById({ _id: id });
    res.status(200).json({ launcher });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const newLauncher = async (req, res) => {
  try {
    checkNewLachers(req.body);
    const { name, city, rocketType, latitude, longitude } = req.body;
    const launcher = {
      name,
      city,
      rocketType,
      latitude,
      longitude,
    };
    const newLauncher = await addedLauncer(launcher);
    res.status(201).json({ launcher: newLauncher });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const deleteLauncher = async (req, res) => {
  try {
    const { id } = req.params;
    checkId(id);
    const launcher = await deleteLauncherById(id);
    res.status(200).json({ launcher });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const updateLauncher = async (req, res) => {
  try {
    const { id } = req.params;
    checkUpdateLauncher(id, req.body);
    const { name, city, rocketType, latitude, longitude } = req.body;
    const resUpdate = {};
    if (name) resUpdate.name = name;
    if (city) resUpdate.city = city;
    if (rocketType) resUpdate.rocketType = rocketType;
    if (latitude) resUpdate.latitude = latitude;
    if (longitude) resUpdate.longitude = longitude;
    const updateLauncher = await updateLauncherById(id, resUpdate);
    res.status(200).json({ updateLauncher });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
