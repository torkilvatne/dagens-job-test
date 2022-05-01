import React, { useEffect } from 'react';
import ApiService from '../../services/apiService';

const SeeView = () => {
  useEffect(() => {
    ApiService.getEndpoint('products', {
      offset: 0,
    }).then((res) => console.log(res));
  }, []);

  return (
    <div>
      <h2>See products</h2>
      <p>List of products</p>
    </div>
  );
};

export default SeeView;
