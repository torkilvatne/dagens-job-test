import React, { useState, useEffect } from 'react';
import ApiService from '../../services/apiService';
import RadioButton from '../FormElements/RadioButton';
import ProductTable from '../ProductTable';

/**
 * File improvements:
 * - To be able to filter on other categories than the ones mention in the task
 *   one could make a request to DB to get all unique categories.
 */

const SeeView = () => {
  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState(null);
  const [products, setProducts] = useState([]);

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
      <select name="sortBy" onChange={handleSelectChange}>
        <option value="null"></option>
        <option value="category">Category</option>
        <option value="asc">Price low - high</option>
        <option value="desc">Price high - low</option>
      </select>
      <ProductTable products={products} />
    </div>
  );
};

export default SeeView;
