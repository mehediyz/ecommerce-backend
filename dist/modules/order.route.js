"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
router.post("/orders", order_controller_1.OrderController.createNewOrder);
router.get("/orders", order_controller_1.OrderController.getAllOrders);
exports.OrderRoutes = router;
