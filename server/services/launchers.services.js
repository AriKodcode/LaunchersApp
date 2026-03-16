export function checkNewLachers(launcher) {
  const { city, rocketType, latitude, longitude, name } = launcher;
  if (!city || !rocketType || !latitude || !longitude || !name) {
    const error = new Error("Missing fields!");
    error.statusCode = 400;
    throw error;
  }
  if (typeof city !== "string") {
    const error = new Error("Error city must be string");
    error.statusCode = 400;
    throw error;
  }
  if (typeof rocketType !== "string") {
    const error = new Error("Error rocketType must be string");
    error.statusCode = 400;
    throw error;
  }
  const typesRocket = ["Shahab3", "Fetah110", "Radwan", "Kheibar"];
  if (!typesRocket.includes(rocketType)) {
    const error = new Error(
      "Error rocketType nums be Shahab3 or Fetah110 or Radwan or Kheibar"
    );
    error.statusCode = 400;
    throw error;
  }
  if (typeof name !== "string") {
    const error = new Error("Error name must be string");
    error.statusCode = 400;
    throw error;
  }
}

export function checkId(id) {
  if (!id) {
    const error = new Error("Error missing ID!");
    error.statusCode = 400;
    throw error;
  }
}

export function checkUpdateLauncher(id, update) {
  if (!id) {
    const error = new Error("Error missing ID!");
    error.statusCode = 400;
    throw error;
  }
  if (!update) {
    const error = new Error("Error missing update!");
    error.statusCode = 400;
    throw error;
  }
}
