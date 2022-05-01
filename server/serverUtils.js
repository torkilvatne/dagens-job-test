const products = require('./db/db');

/**
 * File improvements:
 * - findSimilarProducts can be optimized by better sorting algorithms and check for diff in +/-
 */

const PRODUCTS_PER_PAGE = 24;
const N = 200;

const generateProductId = () => {
  return Date.now().toString(2) + Math.floor(Math.random() * 1000);
};

const createNewProduct = (name, category, price) => {
  return {
    id: generateProductId(),
    name: name,
    category: category,
    price: price,
  };
};

const withOffset = (products, offset) => {
  return products.slice(
    offset * PRODUCTS_PER_PAGE,
    offset * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE
  );
};

const sortedByKey = (products, sortingKey) => {
  return products.sort((a, b) => sortBy(a[sortingKey], b[sortingKey]));
};

const sortedByAsc = (products, key) => {
  return products.sort((a, b) => a[key] - b[key]);
};

const sortedByDesc = (products, key) => {
  return products.sort((a, b) => b[key] - a[key]);
};

const filteredBy = (products, key, value) => {
  return products.filter((p) => p[key] === value);
};

const sortBy = (a, b) => {
  a = a.toUpperCase();
  b = b.toUpperCase();
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
};

const findSimilarProducts = (products, target) => {
  let similarProducts = filteredBy(products, 'category', target.category);
  similarProducts = similarProducts.map((p) => ({
    ...p,
    diff: Math.abs(target.price - p.price),
  }));

  similarProducts = sortedByAsc(similarProducts, 'diff');
  return similarProducts.slice(0, N);
};

module.exports.createNewProduct = createNewProduct;
module.exports.sortBy = sortBy;
module.exports.withOffset = withOffset;
module.exports.sortedByKey = sortedByKey;
module.exports.sortedByAsc = sortedByAsc;
module.exports.sortedByDesc = sortedByDesc;
module.exports.findSimilarProducts = findSimilarProducts;
