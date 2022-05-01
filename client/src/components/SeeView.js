import React, { useState, useEffect } from 'react';
import ApiService from '../services/apiService';
import ProductTable from './ProductTable';

/**
 * File improvements:
 * - To be able to filter on other categories than the ones mention in the task
 *   one could make a request to DB to get all unique categories.
 */

const SeeView = () => {
  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState(null);
  const [products, setProducts] = useState([]);
  const PRODUCTS_PER_PAGE = 24;

  const getProducts = () => {
    ApiService.getEndpoint('products', getOptions())
      .then((res) => res.json())
      .then((res) => setProducts(res));
  };

  const handleSelectChange = (e) => {
    if (e.target.value !== 'null') {
      setSortBy(e.target.value);
    } else {
      setSortBy(null);
    }
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    setPage(page - 1);
  };

  const getOptions = () => {
    let options = {
      offset: page,
    };
    if (sortBy) {
      options.sort = sortBy;
    }
    return options;
  };

  useEffect(() => {
    getProducts();
  }, [page, sortBy]);

  return (
    <div>
      <h2>See products</h2>
      {/* TODO: Make component for SELECT */}
      <select name="sortBy" onChange={handleSelectChange}>
        <option value="null"></option>
        <option value="category">Category</option>
        <option value="asc">Price low - high</option>
        <option value="desc">Price high - low</option>
      </select>
      <ProductTable products={products} />
      {/* TODO: Make component for Pagination */}
      {page > 0 && (
        <button onClick={() => goToPreviousPage()}>Previous page</button>
      )}
      <b>{page + 1}</b>
      {page !== Math.floor(1000 / PRODUCTS_PER_PAGE) && (
        <button onClick={() => goToNextPage()}>Next page</button>
      )}
    </div>
  );
};

export default SeeView;
