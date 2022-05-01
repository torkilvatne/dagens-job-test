const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const products = require('./db/db');
const serverUtils = require('./serverUtils');
const productController = require('./controllers/productController.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * File improvements:
 * - Data validation
 * - Create and import data models/schemas
 * - Add db "connection" and data handling in separate file(s) to
 *   only keep routes in this file (least amount of functionality in server.js)
 * - Better match between frontend/db key names (name vs. product_name, etc.)
 * - Create error handling with better and more HTTP responses
 * - Add error-handler controller at the end of routes
 */

http.createServer(app).listen(3001, () => {
  console.log('Listen on 0.0.0.0:3001');
});

app.get('/', (_, res) => {
  res.send({ status: 200 });
});

process.on('SIGINT', function () {
  process.exit();
});

app.get('/products', productController.getProducts);
app.post('/product', productController.createProduct);
