import { Router } from "express";
import { OrderController } from "./order.controller";

const router = Router();

router.post("/orders", OrderController.createNewOrder);
router.get("/orders", OrderController.getAllOrders);

export const OrderRoutes = router;
