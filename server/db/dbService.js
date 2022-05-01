const products = require('./db');
const serverUtils = require('../serverUtils');

const PRODUCTS_PER_PAGE = 2;

const getAllProducts = () => {
  return products;
};

const getProducts = (offset) => {
  return products.slice(offset, offset + PRODUCTS_PER_PAGE);
};

const findProductById = (id) => {
  const product = products.filter((p) => p.id === id);
  if (product.length == 0) {
    throw new Error();
  }
};

const postNewProduct = (newProduct) => {
  products.push(newProduct);
};

module.exports.postNewProduct = postNewProduct;
module.exports.findProductById = findProductById;
module.exports.getAllProducts = getAllProducts;
module.exports.getProducts = getProducts;
