import express from "express";
const router = express.Router();

import usersRouter from "./users.routes.js";
import authRouter from "./auth.routes.js";
import ordersRouter from "./orders.routes.js";
import cardsRouter from "./cards.routes.js";
import addressesRouter from "./addresses.routes.js";
import productsRouter from "./products.routes.js";
import cartRouter from "./cart.routes.js";

router.use("/api/users", usersRouter);
router.use("/api/auth", authRouter);
router.use("/api/cards", cardsRouter);
router.use("/api/addresses", addressesRouter);
router.use("/api/orders", ordersRouter);
router.use("/api/products", productsRouter);
router.use("/api/cart", cartRouter);


export default router;
