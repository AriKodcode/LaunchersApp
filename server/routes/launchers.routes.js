import express from "express";
import {
  deleteLauncher,
  getApiLaunchers,
  getApiLaunchersById,
  newLauncher,
  updateLauncher,
} from "../controllers/launchers.controllers.js";

const router = express.Router();
router.get("/", getApiLaunchers);
router.get("/:id", getApiLaunchersById);
router.post("/", newLauncher);
router.delete("/:id", deleteLauncher);
router.put("/:id", updateLauncher);
export default router;
