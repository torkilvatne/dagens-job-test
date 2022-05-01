export const generateProductId = () => {
  return Date.now().toString(2) + Math.floor(Math.random() * 1000);
};

export const createNewProduct = (name, category, price) => {
  return {
    id: serverUtils.generateProductId(),
    name: name,
    category: category,
    price: price,
  };
};
