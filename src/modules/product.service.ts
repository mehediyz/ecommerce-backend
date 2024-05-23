import { productModel } from "./product.model";

const createProductIntoDB = async (product: IProduct) => {
  const result = await productModel.create(product);
  return result;
};

export const productServices = { createProductIntoDB };
