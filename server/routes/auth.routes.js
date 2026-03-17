import express from "express";
import {
  createUser,
  deleteuser,
  getAllUsers,
  getuser,
  login,
  updateuser,
} from "../controllers/auth.controllers.js";
import adminToken from "../middleware/checkAdminToken.js";
import checkToken from "../middleware/checkToken.js";

const router = express.Router();

router.post("/login", login);
router.post("/register/create", adminToken, createUser);
router.put("/register/update", adminToken, updateuser);
router.delete("/register/delete/:id", adminToken, deleteuser);
router.get("/get/user", checkToken, getuser);
router.get("/get/users", checkToken, getAllUsers);
export default router;
