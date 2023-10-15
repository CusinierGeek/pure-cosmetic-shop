import express from "express";
const router = express.Router();

import {
  saveCartState,
  clearUserCart,
} from "../controllers/cart.controller.js";

router.post("/save", saveCartState);
router.delete("/:userId", clearUserCart);

export default router;
