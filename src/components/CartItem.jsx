import React from 'react';

const CartItem = ({ item, onRemove, onAdd }) => {
  return (
    <li className="py-3 flex justify-between">
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600">{item.price.toLocaleString()}원 x {item.quantity}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-600 hover:text-red-800"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => onAdd(item)}
          className="text-blue-600 hover:text-blue-800"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;