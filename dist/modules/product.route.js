"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.post("/products", product_controller_1.ProductControllers.createProduct);
router.get("/products", product_controller_1.ProductControllers.getProducts);
exports.ProductRoutes = router;
