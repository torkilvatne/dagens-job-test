const products = require('./db');
const serverUtils = require('../serverUtils');

export const postNewProduct = (product) => {
  products.push(newProduct);
};

export const findProductById = (id) => {
  const product = products.filter((p) => p.id === id);
  if (product.length == 0) {
    throw new Error();
  }
};
