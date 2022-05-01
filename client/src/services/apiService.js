import { createQueryParam } from '../apiUtils';
const ApiService = {
  postEndpoint: async function (endpoint, body) {
    return await fetch('http://localhost:3001/' + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  },
  getEndpoint: async function (endpoint, body) {
    return await fetch(
      'http://localhost:3001/' + endpoint + '?' + createQueryParam(body),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  },
  getSmiliarEndpoint: async function (productId, body) {
    return await fetch(
      'http://localhost:3001/similarProducts?' +
        createQueryParam(body) +
        '&productId=' +
        productId,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  },
};

export default ApiService;
