import { productModel } from "./product.model";

const createProductIntoDB = async (product: IProduct) => {
  const result = await productModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await productModel.find();
  return result;
};

const getProductByIdFromDB = async (id: string) => {
  const result = await productModel.find({ _id: id });
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
};
