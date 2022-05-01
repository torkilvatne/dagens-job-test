const dbService = require('../db/dbService');
const serverUtils = require('../serverUtils');

class ProductController {
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
