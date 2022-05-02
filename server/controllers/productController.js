const dbService = require('../db/dbService');
const serverUtils = require('../serverUtils');

/**
 * File improvements:
 * - Can create more indepented endpoints in this API to make searching more efficient in some cases
 * - Seperate sorting/filtering into utils and create a more robust and flexible sorting/filtering
 */

class ProductController {
  getProducts(req, res) {
    // TODO: Add try/catch for fetching of data
    let products = dbService.getAllProducts();
    if (req.query.sort) {
      products = serverUtils.sortProducts(products, req.query.sort);
    }
    if (req.query.minPrice || req.query.maxPrice) {
      products = serverUtils.filteredByMinMax(
        products,
        'price',
        req.query.minPrice,
        req.query.maxPrice
      );
    }
    if (req.query.filterCategory) {
      products = serverUtils.filteredBy(
        products,
        'category',
        req.query.filterCategory
      );
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
