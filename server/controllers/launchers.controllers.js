import { getAllLaunchers } from "../dal/launchers.dal";

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
