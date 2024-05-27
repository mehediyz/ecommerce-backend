import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createNewOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderServices.createNewOrderIntoDB(order);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

export const OrderController = { createNewOrder };
