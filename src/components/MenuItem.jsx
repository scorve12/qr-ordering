import React from 'react';

const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <span className="text-blue-600 font-bold">{item.price.toLocaleString()}원</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <button
          onClick={() => onAddToCart(item)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          담기
        </button>
      </div>
    </div>
  );
};

export default MenuItem;