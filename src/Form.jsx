import React, { useState } from 'react';
import { toast } from 'react-toastify';
const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.warn('Ingresa algún valor');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          name=""
          id=""
          className="form-input"
          value={newItemName}
          onChange={(event) => {
            setNewItemName(event.target.value);
          }}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
