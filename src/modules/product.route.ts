import { Router } from "express";
import { ProductControllers } from "./product.controller";

const router = Router();

router.post("/products", ProductControllers.createProduct);

export const ProductRoutes = router;
