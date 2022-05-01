const dbService = require('../db/dbService');
const serverUtils = require('../serverUtils');

class ProductController {
  getProducts(req, res) {
    // TODO: Add try/catch for fetching of data
    let products = dbService.getAllProducts();
    if (req.query.sort) {
      if (req.query.sort === 'asc') {
        products = serverUtils.sortedByAsc(products);
      } else if (req.query.sort === 'desc') {
        products = serverUtils.sortedByDesc(products);
      } else {
        products = serverUtils.sortedByKey(products, req.query.sort);
      }
    }
    if (req.query.offset) {
      products = serverUtils.withOffset(products, parseInt(req.query.offset));
    }
    res.status(200).send(products);
  }

  createProduct(req, res) {
    // TODO: Validate data
    // TODO: Check for duplicated products
    const newProduct = serverUtils.createNewProduct(
      req.body.name,
      req.body.category,
      req.body.price
    );
    // TODO: Try/Catch
    dbService.postNewProduct(newProduct);
    res.status(200).send('Product created');
  }
}

module.exports = new ProductController();
