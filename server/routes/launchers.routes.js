import express from "express";
import {
  getApiLaunchers,
  getApiLaunchersById,
} from "../controllers/launchers.controllers.js";

const router = express.Router();

router.get("/", getApiLaunchers);
router.get("/:id", getApiLaunchersById);

export default router;
