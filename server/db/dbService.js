const products = require('./db');

const getAllProducts = () => {
  return products;
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
