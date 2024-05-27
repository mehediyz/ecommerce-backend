import { OrderModel } from "./order.model";

const createNewOrderIntoDB = async (order: IOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

export const OrderServices = { createNewOrderIntoDB };
