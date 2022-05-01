import React, { useState, useEffect } from 'react';
import ApiService from '../services/apiService';
import ProductTable from './ProductTable';

const FindSimilarView = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState([]);
  const [page, setPage] = useState(40);
  const [feedback, setFeedback] = useState('');

  const handleFieldUpdate = (e) => {
    setProductId(e.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    ApiService.postEndpoint(productId).then((res) => {
      if (res.status === 200) {
        setProducts(res);
      } else {
        setFeedback('Something went wrong.');
      }
    });
  };

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
        <input type="submit" value={'Send inn'} />
      </form>
      {feedback !== '' && (
        <p style={{ color: 'orange' }}>
          <b>{feedback}</b>
        </p>
      )}
      <ProductTable products={products} page={page} setPage={setPage} />
    </div>
  );
};

export default FindSimilarView;
