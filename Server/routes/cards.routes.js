import express from "express";
const router = express.Router();

import { addCard, deleteCard } from "../controllers/cards.controller.js";

router.post("/", addCard);
router.delete("/", deleteCard);

export default router;
