import express from "express";
import {
  deleteLauncher,
  getApiLaunchers,
  getApiLaunchersById,
  newLauncher,
  updateLauncher,
} from "../controllers/launchers.controllers.js";
import checkToken from "../middleware/checkToken.js";
import intelligenceToken from "../middleware/checkIntelligenceToken.js";

const router = express.Router();
router.get("/", checkToken, getApiLaunchers);
router.get("/:id", checkToken, getApiLaunchersById);
router.post("/", intelligenceToken, newLauncher);
router.delete("/:id", intelligenceToken, deleteLauncher);
router.put("/:id", intelligenceToken, updateLauncher);
export default router;
