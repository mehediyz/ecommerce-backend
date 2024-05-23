import { Router } from "express";
import { ProductControllers } from "./product.controller";

const router = Router();

router.post("/products", ProductControllers.createProduct);
router.get("/products", ProductControllers.getProducts);

export const ProductRoutes = router;
