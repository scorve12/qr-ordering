import React from 'react';
import MenuItem from './MenuItem';

const MenuGrid = ({ items, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <MenuItem 
          key={item.id} 
          item={item} 
          onAddToCart={onAddToCart} 
        />
      ))}
    </div>
  );
};

export default MenuGrid;