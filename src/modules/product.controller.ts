import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productServices.createProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const result = await productServices.getAllProductsFromDB(
      searchTerm as string
    );
    res.status(200).json({
      success: true,
      message: `Products${
        searchTerm ? ` matching search term '${searchTerm}'` : ""
      } fetched successfully!`,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getProductByIdFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = req.body;
    const result = await productServices.updateProductByIdIntoDB(
      productId,
      product
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductByIdFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    console.error(error);
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
