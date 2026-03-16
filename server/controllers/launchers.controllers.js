import { nanoid } from "nanoid";
import {
  addedLauncer,
  deleteLauncherById,
  getAllLaunchers,
  updateLauncherById,
} from "../dal/launchers.dal";
import {
  checkId,
  checkNewLachers,
  checkUpdateLauncher,
} from "../services/launchers.services";

export const getApiLaunchers = async (req, res) => {
  try {
    const launchers = await getAllLaunchers();
    res.status(200).json({ launchers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getApiLaunchersById = async (req, res) => {
  try {
    const { id } = req.params;
    checkId(id);
    const launcher = await getApiLaunchersById({ id });
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
      id: nanoid(8),
      name,
      city,
      rocketType,
      latitude,
      longitude,
    };
    await addedLauncer(launcher);
    res.status(201).json({ launcher });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const deleteLauncher = async (req, res) => {
  try {
    const { id } = req.params;
    checkId(id);
    await deleteLauncherById(id);
    res.status(200).json({ message: `launcher ${id} deleted` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const updateLauncher = async (req, res) => {
  try {
    const { id } = req.params;
    checkUpdateLauncher(id, req.body);
    const { update } = req.body;
    const { name, city, rocketType, latitude, longitude } = update;
    const resUpdate = {};
    if (name) resUpdate.name = name;
    if (city) resUpdate.city = city;
    if (rocketType) resUpdate.rocketType = rocketType;
    if (latitude) resUpdate.latitude = latitude;
    if (longitude) resUpdate.longitude = longitude;
    updateLauncherById(id, resUpdate);
    res.status(200).json({ updateLauncher: resUpdate });
  } catch (err) {
    res.status(500).jsox({ error: err.message });
  }
};
