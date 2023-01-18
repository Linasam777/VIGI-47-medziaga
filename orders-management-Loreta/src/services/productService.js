import { Product } from "../models/Product.js";

const products = [];

export const createProduct = ({ name, price, isAvailable, imageURL }) => {
  try {
    const product = new Product(name, price, isAvailable, imageURL);

    products.push(product);
  } catch (error) {
    return console.error(error);
  }
};

export const getProducts = () => {
  return products;
};
