import { nanoid } from "nanoid";
import { addedLauncer, getAllLaunchers } from "../dal/launchers.dal";
import checkNewLachers from "../services/launchers.services";

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
