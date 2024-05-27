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

const updateProductByIdIntoDB = async (id: string, product: IProduct) => {
  const result = await productModel.findByIdAndUpdate(id, product, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteProductByIdFromDB = async (id: string) => {
  const result = await productModel.findByIdAndDelete(id);
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdIntoDB,
  deleteProductByIdFromDB,
};
