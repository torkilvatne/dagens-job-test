import React, { useState, useEffect } from 'react';
import ApiService from '../services/apiService';
import ProductTable from './ProductTable';

/**
 * File improvements:
 * - Get matching product and display it's information to the user for better overview.
 */

const FindSimilarView = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [page, setPage] = useState(0);
  const [feedback, setFeedback] = useState('');

  const getProducts = (pId) => {
    ApiService.getSmiliarEndpoint(pId, {
      offset: page,
    })
      .then((res) => {
        if (res.status === 200) {
          return res;
        } else if (res.status === 404) {
          throw new Error('ID not found.');
        } else {
          throw new Error('Something went wrong.');
        }
      })
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => {
        setFeedback(error.message);
        setProducts([]);
      });
  };

  const handleFieldUpdate = (e) => {
    setProductId(e.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    getProducts(productId);
  };

  useEffect(() => {
    if (productId !== '') {
      getProducts(productId);
    }
  }, [page]);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="productId"
          value={productId}
          onChange={handleFieldUpdate}
        />
        <br />
        <input type="submit" value={'Find'} />
      </form>
      {feedback !== '' && (
        <p style={{ color: 'orange' }}>
          <b>{feedback}</b>
        </p>
      )}
      {/* Implement response count to make pagination work here */}
      <ProductTable
        products={products}
        page={page}
        setPage={setPage}
        maxProductAmount={100}
      />
    </div>
  );
};

export default FindSimilarView;
