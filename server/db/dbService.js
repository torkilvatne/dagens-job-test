const products = require('./db');

const getAllProducts = () => {
  return products;
};

const findProductById = (id) => {
  const product = products.find((p) => p.id === id);
  if (product === null) {
    throw new Error();
  }
  return product;
};

const postNewProduct = (newProduct) => {
  products.push(newProduct);
};

module.exports.postNewProduct = postNewProduct;
module.exports.findProductById = findProductById;
module.exports.getAllProducts = getAllProducts;
