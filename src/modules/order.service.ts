import { OrderModel } from "./order.model";

const createNewOrderIntoDB = async (order: IOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

export const OrderServices = { createNewOrderIntoDB, getAllOrdersFromDB };
