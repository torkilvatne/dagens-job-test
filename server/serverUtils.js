const PRODUCTS_PER_PAGE = 24;

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
  return products.slice(offset, offset + PRODUCTS_PER_PAGE);
};

const sortedByKey = (products, sortingKey) => {
  return products.sort((a, b) => sortBy(a[sortingKey], b[sortingKey]));
};

const sortedByAsc = (products) => {
  return products.sort((a, b) => a.price - b.price);
};

const sortedByDesc = (products) => {
  return products.sort((a, b) => b.price - a.price);
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

module.exports.createNewProduct = createNewProduct;
module.exports.sortBy = sortBy;
module.exports.withOffset = withOffset;
module.exports.sortedByKey = sortedByKey;
module.exports.sortedByAsc = sortedByAsc;
module.exports.sortedByDesc = sortedByDesc;
