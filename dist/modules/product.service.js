"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.create(product);
    return result;
});
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.find();
    return result;
});
const getProductByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.find({ _id: id });
    return result;
});
const updateProductByIdIntoDB = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findByIdAndUpdate(id, product, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteProductByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findByIdAndDelete(id);
    return result;
});
exports.productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getProductByIdFromDB,
    updateProductByIdIntoDB,
    deleteProductByIdFromDB,
};
