import express from "express";
import {
  getApiLaunchers,
  getApiLaunchersById,
  newLauncher,
} from "../controllers/launchers.controllers.js";

const router = express.Router();

router.get("/", getApiLaunchers);
router.get("/:id", getApiLaunchersById);
router.post("/", newLauncher);

export default router;
