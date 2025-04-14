import React, { useState } from 'react';
import CategoryTabs from './CategoryTabs';
import MenuGrid from './MenuGrid';

const MenuSection = ({ menu, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState(menu.categories[0].name);

  const selectedItems = menu.categories
    .find(cat => cat.name === selectedCategory)?.items || [];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">{menu.title}</h2>
      
      <CategoryTabs 
        categories={menu.categories} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <MenuGrid 
        items={selectedItems} 
        onAddToCart={onAddToCart} 
      />
    </div>
  );
};

export default MenuSection;