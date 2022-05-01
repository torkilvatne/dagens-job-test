const dbService = require('../db/dbService');
const serverUtils = require('../serverUtils');

/**
 * File improvements:
 * - Seperate sorting into utils and create a more robust and flexible sorting
 */

class ProductController {
  getProducts(req, res) {
    // TODO: Add try/catch for fetching of data
    let products = dbService.getAllProducts();
    if (req.query.sort) {
      if (req.query.sort === 'asc') {
        products = serverUtils.sortedByAsc(products, 'price');
      } else if (req.query.sort === 'desc') {
        products = serverUtils.sortedByDesc(products, 'price');
      } else {
        products = serverUtils.sortedByKey(products, req.query.sort);
      }
    }
    if (req.query.offset) {
      products = serverUtils.withOffset(products, parseInt(req.query.offset));
    }
    res.status(200).send(products);
  }

  getSimilarProducts(req, res) {
    // TODO: Add try/catch for fetching of data
    if (req.query.productId) {
      try {
        const product = dbService.findProductById(req.query.productId);
        const simiarProducts = serverUtils.findSimilarProducts(
          dbService.getAllProducts(),
          product
        );
        // TODO: Validate if 'offset' excists
        const productOffset = serverUtils.withOffset(
          simiarProducts,
          parseInt(req.query.offset)
        );
        res.status(200).send(productOffset);
      } catch (error) {
        res.status(404).send('No product for id ' + req.query.productId);
      }
    } else {
      res.status(200).send([]);
    }
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
