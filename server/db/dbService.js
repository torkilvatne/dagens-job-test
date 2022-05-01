const products = require('./db');
const serverUtils = require('../serverUtils');

const postNewProduct = (newProduct) => {
  products.push(newProduct);
};

const findProductById = (id) => {
  const product = products.filter((p) => p.id === id);
  if (product.length == 0) {
    throw new Error();
  }
};

module.exports.postNewProduct = postNewProduct;
module.exports.findProductById = findProductById;
