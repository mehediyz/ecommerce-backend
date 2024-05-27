import { Router } from "express";
import { OrderController } from "./order.controller";

const router = Router();

router.post("/orders", OrderController.createNewOrder);

export const OrderRoutes = router;
