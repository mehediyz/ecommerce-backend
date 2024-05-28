import { OrderModel } from "./order.model";

const createNewOrderIntoDB = async (order: IOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrdersFromDB = async (email?: string) => {
  let query = {};
  if (email) {
    query = {
      email: email,
    };
  }
  const result = await OrderModel.find(query);
  return result;
};

export const OrderServices = { createNewOrderIntoDB, getAllOrdersFromDB };
