import express from "express";
const router = express.Router();

import {
  getProducts,
  getCategory,
  getBrands,
  getProductById,
  generateDiscount,
} from "../controllers/products.controller.js";

router.get("/", getProducts);
router.get("/category", getCategory);
router.get("/brands", getBrands);
router.get("/:id", getProductById);
router.get("/discount/:number", generateDiscount);

export default router;
