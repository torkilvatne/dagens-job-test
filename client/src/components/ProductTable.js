import React from 'react';

/**
 *
 * File improvements:
 * - Generalize columns to have one uniform table component
 */

const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <b>Name</b>
          </th>
          <th>
            <b>Category</b>
          </th>
          <th>
            <b>Price</b>
          </th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price} kr</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ProductTable;
