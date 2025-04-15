import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const MenuCategoryTabs = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="menu-category-tabs">
      <div className="tabs-container">
        <button className="tab search-tab">
          <IoSearchOutline />
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            className={`tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryTabs;