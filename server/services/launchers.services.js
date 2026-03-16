export function checkNewLachers(launcher) {
  const { city, rocketType, latitude, longitude, name } = launcher;
  if (!city || !rocketType || !latitude || !longitude || !name) {
    const error = new Error("Missing fields!");
    error.statusCode = 400;
    throw error;
  }
  if (typeof city !== String) {
    const error = new Error("Error city must be string");
    error.statusCode = 400;
    throw error;
  }
  if (typeof rocketType !== String) {
    const error = new Error("Error rocketType must be string");
    error.statusCode = 400;
    throw error;
  }
  if (typeof latitude !== Number) {
    const error = new Error("Error latitude must be number");
    error.statusCode = 400;
    throw error;
  }
  if (typeof longitude !== String) {
    const error = new Error("Error longitude must be number");
    error.statusCode = 400;
    throw error;
  }
  if (typeof name !== String) {
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

export function checkUpdateLauncher(data) {
  const { id } = data;
  const { update } = data;
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
