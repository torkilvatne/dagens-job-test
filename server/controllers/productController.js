const dbService = require('../db/dbService');
const serverUtils = require('../serverUtils');

class ProductController {
  getProducts(req, res) {
    // TODO: Add try/catch for fetching of data
    if (req.query.offset) {
      res.status(200).send(dbService.getProducts(req.query.offset));
    }
    res.status(200).send(dbService.getAllProducts());
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
