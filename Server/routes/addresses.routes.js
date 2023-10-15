import express from "express";
const router = express.Router();

import {
  addAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/address.controller.js";

router.post("/", addAddress);
router.patch("/", updateAddress);
router.delete("/", deleteAddress);

export default router;
