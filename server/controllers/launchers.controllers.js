import { getAllLaunchers } from "../dal/launchers.dal";

export const getApiLaunchers = async (req, res) => {
  try {
    const launchers = await getAllLaunchers();
    res.status(200).json({ launchers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
