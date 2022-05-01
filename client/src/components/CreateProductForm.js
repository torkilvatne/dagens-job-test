import React, { useState } from 'react';

/**
 * File improvements
 *
 * - Form data not-null validation
 * - Form data validation before submission
 * - Price field value display format
 * - Exctract fields into independent components for flexibility (types, validations, formatting)
 * - Set up tests for form
 */

const CreateProductForm = () => {
  const [updateFieldInputs, setUpdateFieldInputs] = useState({});

  const handleFormValueUpdate = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdateFieldInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateFieldInputs),
    });
    //setUpdateFieldInputs({});
  };

  return (
    <form onSubmit={handleFormSubmit} id="createPorduct">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={updateFieldInputs.product_name || ''}
        onChange={handleFormValueUpdate}
      />
      <br />
      <label>Category</label>
      <input
        type="text"
        name="category"
        value={updateFieldInputs.category || ''}
        onChange={handleFormValueUpdate}
      />
      <br />
      <label>Price</label>
      <input
        type="number"
        name="price"
        value={updateFieldInputs.product_price || ''}
        onChange={handleFormValueUpdate}
      />
      <br />
      <input type="submit" value={'Send inn'} />
    </form>
  );
};

export default CreateProductForm;
