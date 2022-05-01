import React, { useState } from 'react';
import ApiService from '../services/apiService';

/**
 * File improvements
 *
 * - Form data not-null validation
 * - Form data validation before submission
 * - Price field value display format
 * - Exctract fields into independent components for flexibility (types, validations, formatting)
 * - Set up tests for form
 * - Improved feedback to user
 * - Set up a better solution for adding category (Select-input and "create new category"-component)
 */

const CreateProductForm = () => {
  const [updateFieldInputs, setUpdateFieldInputs] = useState({});
  const [feedback, setFeedback] = useState('');

  const handleFormValueUpdate = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdateFieldInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    ApiService.postEndpoint('product', updateFieldInputs).then((res) => {
      if (res.status === 200) {
        setFeedback("Product '" + updateFieldInputs.name + "' created.");
        setUpdateFieldInputs({});
      } else {
        setFeedback('Something went wrong.');
      }
    });
  };

  return (
    <div>
      {feedback !== '' && (
        <p style={{ color: 'orange' }}>
          <b>{feedback}</b>
        </p>
      )}
      <form onSubmit={handleFormSubmit} id="createProduct">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={updateFieldInputs.name || ''}
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
          value={updateFieldInputs.price || ''}
          onChange={handleFormValueUpdate}
        />
        <br />
        <input type="submit" value={'Send inn'} />
      </form>
    </div>
  );
};

export default CreateProductForm;
