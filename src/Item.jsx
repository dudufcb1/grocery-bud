import React from 'react';
import SingleItem from './SingleItem';

const Item = ({ items, removeItems, editItems }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItems={removeItems}
            editItems={editItems}
          />
        );
      })}
    </div>
  );
};

export default Item;
