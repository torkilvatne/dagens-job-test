import React from 'react';

/**
 *
 * File improvements:
 * - Generalize columns to have one uniform table component
 */

const ProductTable = ({ products, page, setPage, maxProductAmount }) => {
  const PRODUCTS_PER_PAGE = 24;

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <>
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
      {/* TODO: Make component for Pagination */}
      {page > 0 && (
        <button onClick={() => goToPreviousPage()}>Previous page</button>
      )}
      <b>{page + 1}</b>
      {page !== Math.floor(maxProductAmount / PRODUCTS_PER_PAGE) && (
        <button onClick={() => goToNextPage()}>Next page</button>
      )}
    </>
  );
};

export default ProductTable;
