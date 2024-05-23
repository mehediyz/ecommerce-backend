import "dotenv/config";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Ecommerce server running!");
});

export default app;
