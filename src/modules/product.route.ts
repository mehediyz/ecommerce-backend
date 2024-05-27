import { Router } from "express";
import { ProductControllers } from "./product.controller";

const router = Router();

router.post("/products", ProductControllers.createProduct);
router.get("/products", ProductControllers.getProducts);
router.get("/products/:productId", ProductControllers.getProductById);
router.put("/products/:productId", ProductControllers.updateProductById);
router.delete("/products/:productId", ProductControllers.deleteProductById);

export const ProductRoutes = router;
