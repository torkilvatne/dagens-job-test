import React from 'react';

const RadioButton = ({ name, id, checked, onChange }) => {
  return (
    <label>
      <input type="radio" id={id} checked={checked} onChange={onChange} />
      {name}
    </label>
  );
};

export default RadioButton;
