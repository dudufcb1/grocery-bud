import React, { useState } from 'react';
const SingleItem = ({ item, removeItems, editItems }) => {
  //const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        name=""
        id=""
        checked={item.completed}
        onChange={() => editItems(item.id)}
      />
      <p className={item.completed ? 'item-checked' : ''}>{item.name}</p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => {
          removeItems(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
