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

module.exports.createNewProduct = createNewProduct;
