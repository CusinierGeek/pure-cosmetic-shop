import express from "express";
const router = express.Router();


import { checkout, fetchOrdersByCustomer } from "../controllers/orders.controller.js";

router.post("/", checkout);
router.post("/history", fetchOrdersByCustomer);

export default router;
