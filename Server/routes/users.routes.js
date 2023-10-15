import express from "express";
const router = express.Router();

import {
  signup,
  fetchCurrentUser,
  deleteUser,
  createTempUser,
} from "../controllers/users.controller.js";

router.post("/", signup);
router.get("/", fetchCurrentUser);
router.delete("/", deleteUser);
router.post("/temp", createTempUser);



export default router;
