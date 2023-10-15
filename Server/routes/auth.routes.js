import express from "express";
const router = express.Router();

import {
  sessionCreate,
  sessionDelete,
} from "../controllers/auth.controller.js";

router.post("/", sessionCreate);
router.delete("/", sessionDelete);

export default router;
