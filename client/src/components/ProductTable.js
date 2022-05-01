import React from 'react';

/**
 *
 * File improvements:
 * - Generalize columns to have one uniform table component
 */

const ProductTable = ({ products }) => {
  return (
    <table>
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
      {products.length > 0 &&
        products.map((product) => {
          return (
            <tr>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price} kr</td>
            </tr>
          );
        })}
    </table>
  );
};

export default ProductTable;
